CREATE SCHEMA "dam";
--> statement-breakpoint
CREATE TABLE "dam"."admin_users" (
	"user_id" uuid,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "dam"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "dam"."photos" (
	"id" uuid DEFAULT gen_random_uuid(),
	"session_id" uuid NOT NULL,
	"cloudinary_id" text NOT NULL,
	"url" text NOT NULL,
	"title" text,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "dam"."session_users" (
	"session_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "dam"."sessions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "dam"."admin_users" ADD CONSTRAINT "admin_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dam"."users" ADD CONSTRAINT "users_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dam"."photos" ADD CONSTRAINT "photos_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "dam"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dam"."session_users" ADD CONSTRAINT "session_users_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "dam"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dam"."session_users" ADD CONSTRAINT "session_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "dam"."users"("id") ON DELETE cascade ON UPDATE no action;