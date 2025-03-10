import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    CLOUDINARY_COLLECTION_ENDPOINT: z.string(),
    CLOUDINARY_NAME: z.string(),

    DATABASE_URL: z.string(),
    SUPABASE_SERVICE_KEY: z.string(),
  },

  experimental__runtimeEnv: process.env,
});
