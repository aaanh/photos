import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // FOR PHOTO REEL
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    CLOUDINARY_COLLECTION_ENDPOINT: z.string(),
    CLOUDINARY_NAME: z.string(),

    // FOR DAM

    // ASSET STORAGE
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
    AWS_REGION: z.string(),
    S3_BUCKET_NAME: z.string(),
    S3_BUCKET_URL: z.string(),

    // SUPABASE
    DATABASE_URL: z.string(),
    SUPABASE_SERVICE_KEY: z.string(),
  },

  experimental__runtimeEnv: process.env,
});
