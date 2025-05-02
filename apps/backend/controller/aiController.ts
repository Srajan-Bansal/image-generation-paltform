import type { Request, Response } from 'express';
import prisma from 'db';
import { TrainModel, GenerateImage } from 'common/types';
import { FalAIModel } from '../models/FalAIModel';
const USER_ID = '123';
const falAIModel = new FalAIModel();

export const trainModel = async (req: Request, res: Response) => {
	const parsedBody = TrainModel.safeParse(req.body);
	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const { request_id } = await falAIModel.trainModel(
		parsedBody.data.zipUrl,
		parsedBody.data.name
	);

	const model = await prisma.model.create({
		data: {
			...parsedBody.data,
			falAiRequestId: request_id,
			userId: USER_ID,
		},
	});

	res.status(200).json({ modelId: model.id });
};

export const generateImage = async (req: Request, res: Response) => {
	const parsedBody = GenerateImage.safeParse(req.body);
	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const model = await prisma.model.findUnique({
		where: { id: parsedBody.data.modelId },
	});
	if (!model) {
		res.status(400).json({ message: 'Model not found' });
		return;
	}

	const { request_id } = await falAIModel.generateImage(
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
};
