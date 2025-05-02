import { S3Client } from 'bun';

export const getPresignedUrl = (key: string) => {
	return S3Client.presign(key, {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
		endpoint: process.env.AWS_ENDPOINT!,
		bucket: process.env.BUCKET_NAME!,
		expiresIn: 60 * 60 * 24 * 30,
	});
};
