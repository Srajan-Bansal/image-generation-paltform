import type { Request, Response } from 'express';
import prisma from 'db';
import { GenerateImagesFromPack } from 'common/types';
import { FalAIModel } from '../models/FalAIModel';

const USER_ID = '123';
const falAIModel = new FalAIModel();

export const generateImagesFromPack = async (req: Request, res: Response) => {
	const parsedBody = GenerateImagesFromPack.safeParse(req.body);
	if (!parsedBody.success) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const prompts = await prisma.packPrompt.findMany({
		where: { packId: parsedBody.data.packId },
	});

	const requestIds = await Promise.all(
		prompts.map((prompt: { prompt: string }) =>
			falAIModel.generateImage(prompt.prompt, parsedBody.data.modelId)
		)
	);

	const outputImages = await prisma.outputImage.createManyAndReturn({
		data: prompts.map((prompt: { prompt: string }, index: number) => ({
			prompt: prompt.prompt,
			modelId: parsedBody.data.modelId,
			userId: USER_ID,
			imageUrl: '',
			falAiRequestId: requestIds[index]?.request_id,
		})),
	});

	res.status(200).json({
		images: outputImages.map((img: { id: string }) => img.id),
	});
};

export const getUserPacks = async (req: Request, res: Response) => {
	const packs = await prisma.pack.findMany({
		where: { userId: USER_ID },
	});
	res.status(200).json({ packs });
};
