import type { Request, Response } from 'express';
import prisma from 'db';

const USER_ID = '123';

export const getBulkImages = async (req: Request, res: Response) => {
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

	res.status(200).json({ images: outputImages });
};
