import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "@/env/server";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export type S3ImageResponse = {
  url: string;
  s3_key: string;
  width: number;
  height: number;
  format: string;
};

export class S3Service {
  private static instance: S3Service;
  private bucket: string;

  private constructor() {
    this.bucket = env.S3_BUCKET_NAME;
  }

  public static getInstance(): S3Service {
    if (!S3Service.instance) {
      S3Service.instance = new S3Service();
    }
    return S3Service.instance;
  }

  async uploadImage(
    file: Buffer,
    contentType: string
  ): Promise<S3ImageResponse> {
    const key = `photos/${uuidv4()}`;

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: file,
      ContentType: contentType,
    });

    await s3Client.send(command);

    // Generate a signed URL that expires in 1 hour
    const getCommand = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    const url = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });

    return {
      url,
      s3_key: key,
      width: 0, // You'll need to get these from the image metadata
      height: 0,
      format: contentType.split("/")[1],
    };
  }

  async getSignedUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    return signedUrl;
  }

  async deleteImage(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    await s3Client.send(command);
  }
}
