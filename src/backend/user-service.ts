import { db } from "@/db";
import { admins, users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { createClient } from "@supabase/supabase-js";
import { env as envServer } from "@/env/server";
import { env as envClient } from "@/env/client";

const supabase = createClient(
  envClient.NEXT_PUBLIC_SUPABASE_URL,
  envServer.SUPABASE_SERVICE_KEY
);

export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.id, email)).execute();
}

export async function isAdmin(id: string) {
  const user = await db
    .select()
    .from(admins)
    .where(eq(admins.id, id))
    .execute();

  return user.length > 0;
}
