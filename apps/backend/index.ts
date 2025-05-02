import express from 'express';
import dotenv from 'dotenv';
import { trainModel, generateImage } from './controller/aiController';
import {
	generateImagesFromPack,
	getUserPacks,
} from './controller/packController';
import { getBulkImages } from './controller/imageController';
import {
	handleTrainWebhook,
	handleImageWebhook,
} from './controller/webhookController';
import { getPresignedUrl } from './utils/s3';

dotenv.config();
const app = express();
app.use(express.json());

// AI
app.post('/ai/train', trainModel);
app.post('/ai/generate', generateImage);

// Packs
app.post('/pack/generate', generateImagesFromPack);
app.get('/pack/bulk', getUserPacks);

// Images
app.get('/image/bulk', getBulkImages);

// Webhooks
app.post('/fal-ai/webhook/train', handleTrainWebhook);
app.post('/fal-ai/webhook/image', handleImageWebhook);

// Presigned URL
app.get('/pre-signed-url', (_, res) => {
	const key = `models/${Date.now()}.zip`;
	const url = getPresignedUrl(key);
	res.status(200).json({ url, key });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
