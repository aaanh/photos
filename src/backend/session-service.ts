import { db } from "../db";
import { sessions, AppUser } from "../../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";

export type Session = InferSelectModel<typeof sessions>;

export class SessionService {
  private static instance: SessionService;
  private constructor() {}

  public static getInstance(): SessionService {
    if (!SessionService.instance) {
      SessionService.instance = new SessionService();
    }
    return SessionService.instance;
  }
  async getAllSessionsByUser(user: AppUser) {
    return await db
      .select()
      .from(sessions)
      .where(eq(sessions.user_id, user.id!))
      .orderBy(desc(sessions.createdAt));
  }
}

// Export a singleton instance
export const sessionService = SessionService.getInstance();
