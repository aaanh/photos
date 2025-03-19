import { db } from "@/db";
import { admins, appUsers, users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { User } from "@supabase/supabase-js";

export class UserService {
  private static instance: UserService;
  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUserByEmail(email: string) {
    return db.select().from(users).where(eq(users.id, email)).execute();
  }

  async isAdmin(id: string) {
    const user = await db
      .select()
      .from(admins)
      .where(eq(admins.id, id))
      .execute();

    return user.length > 0;
  }

  async getAllUsers() {
    return db.select().from(appUsers).execute();
  }

  async getUserFromSupabase(user: User) {
    const res = await db
      .select()
      .from(appUsers)
      .where(eq(users.id, user.id))
      .limit(1)
      .execute();

    return res[0];
  }
}

// Export a singleton instance
export const accountService = UserService.getInstance();
