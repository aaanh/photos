ALTER TABLE "dam"."photos" RENAME COLUMN "cloudinary_id" TO "s3_key";--> statement-breakpoint
ALTER TABLE "dam"."photos" ADD COLUMN "s3_bucket" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dam"."photos" ADD COLUMN "s3_region" text NOT NULL;