import type { Request, Response } from 'express';
import prisma from 'db';

export const handleTrainWebhook = async (req: Request, res: Response) => {
	const requestId = req.body.request_id;
	await prisma.model.update({
		where: { falAiRequestId: requestId },
		data: {
			trainingStatus: 'GENERATED',
			tensorPath: req.body.tensor_path,
		},
	});
	res.status(200).json({ message: 'Webhook received' });
};

export const handleImageWebhook = async (req: Request, res: Response) => {
	const requestId = req.body.request_id;
	await prisma.outputImage.update({
		where: { falAiRequestId: requestId },
		data: {
			status: 'GENERATED',
			imageUrl: req.body.image_url,
		},
	});
	res.status(200).json({ message: 'Webhook received' });
};
