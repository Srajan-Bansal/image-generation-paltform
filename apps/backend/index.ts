import express from 'express';
import {
	GenerateImage,
	GenerateImagesFromPack,
	TrainModel,
} from 'common/types';
import prisma from 'db';
import { FalAIModel } from './models/FalAIModel';

const app = express();
app.use(express.json());

const falAIModel = new FalAIModel();

app.get('/', (req, res) => {
	res.send('Hello World');
});

const USER_ID = '123';

app.post('/ai/train', async (req, res) => {
	const parsedBody = TrainModel.safeParse(req.body);
	const images = req.body.images;

	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const { request_id, response_url } = await falAIModel.trainModel(
		'',
		parsedBody.data.name
	);

	const model = await prisma.model.create({
		data: {
			name: parsedBody.data.name,
			type: parsedBody.data.type,
			age: parsedBody.data.age,
			ethinicity: parsedBody.data.ethinicity,
			eyeColor: parsedBody.data.eyeColor,
			bald: parsedBody.data.bald,
			images: parsedBody.data.images,
			falAiRequestId: request_id,
			userId: USER_ID,
		},
	});

	res.status(200).json({ modelId: model.id });
});

app.post('/ai/generate', async (req, res) => {
	const parsedBody = GenerateImage.safeParse(req.body);

	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const model = await prisma.model.findUnique({
		where: {
			id: parsedBody.data.modelId,
		},
	});

	if (!model) {
		res.status(400).json({ message: 'Model not found' });
		return;
	}

	const { request_id, response_url } = await falAIModel.generateImage(
		parsedBody.data.prompt,
		model.tensor_path
	);

	const outputImage = await prisma.outputImage.create({
		data: {
			prompt: parsedBody.data.prompt,
			modelId: parsedBody.data.modelId,
			userId: USER_ID,
			imageUrl: '',
			falAiRequestId: request_id,
		},
	});

	res.status(200).json({ outputImageId: outputImage.id });
});

app.post('/pack/generate', async (req, res) => {
	const parsedBody = GenerateImagesFromPack.safeParse(req.body);

	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const prompts = await prisma.packPrompt.findMany({
		where: {
			packId: parsedBody.data.packId,
		},
	});

	const outputImages = await prisma.outputImage.createManyAndReturn({
		data: prompts.map((prompt: { prompt: string }) => ({
			prompt: prompt.prompt,
			modelId: parsedBody.data.modelId,
			userId: USER_ID,
		})),
	});

	res.status(200).json({
		images: outputImages.map((image: { id: string }) => image.id),
	});
});

app.get('/pack/bulk', async (req, res) => {
	const packs = await prisma.pack.findMany({
		where: {
			userId: USER_ID,
		},
	});

	res.status(200).json({
		packs,
	});
});

app.get('/image/bulk', async (req, res) => {
	const ids = req.query.ids as string[];
	const limit = parseInt(req.query.limit as string) || 10;
	const offset = parseInt(req.query.offset as string) || 0;

	const outputImages = await prisma.outputImage.findMany({
		where: {
			id: { in: ids },
			userid: USER_ID,
		},
		skip: offset,
		take: limit,
	});

	res.status(200).json({
		images: outputImages,
	});
});

app.post('/fal-ai/webhook/train', async (req, res) => {
	console.log(req.body);
	// update the status of the image in the DB
	const requestId = req.body.request_id;

	await prisma.model.update({
		where: {
			falAiRequestId: requestId,
		},
		data: {
			trainingStatus: 'GENERATED',
			tensorPath: req.body.tensor_path,
		},
	});

	res.status(200).json({ message: 'Webhook received' });
});

app.post('/fal-ai/webhook/image', async (req, res) => {
	console.log(req.body);
	// update the status of the image in the DB
	const requestId = req.body.request_id;

	await prisma.outputImage.update({
		where: {
			falAiRequestId: requestId,
		},
		data: {
			status: 'GENERATED',
			imageUrl: req.body.image_url,
		},
	});
	res.status(200).json({ message: 'Webhook received' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
