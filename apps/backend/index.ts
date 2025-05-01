import express from 'express';
import {
	GenerateImage,
	GenerateImagesFromPack,
	TrainModel,
} from 'common/types';
import prisma from 'db';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

const USER_ID = '123';

app.post('/ai/train', async (req, res) => {
	const parsedBody = TrainModel.safeParse(req.body);

	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const model = await prisma.model.create({
		data: {
			name: parsedBody.data.name,
			type: parsedBody.data.type,
			age: parsedBody.data.age,
			ethinicity: parsedBody.data.ethinicity,
			eyeColor: parsedBody.data.eyeColor,
			bald: parsedBody.data.bald,
			images: parsedBody.data.images,
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

	const outputImage = await prisma.outputImage.create({
		data: {
			prompt: parsedBody.data.prompt,
			modelId: parsedBody.data.modelId,
			userId: USER_ID,
			imageUrl: '',
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
