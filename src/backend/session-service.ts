import { db } from "../db";
import { sessions, AppUser, photos, sessionUsers } from "../../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";
import { S3Service } from "@/lib/s3";

export type Session = InferSelectModel<typeof sessions>;
export type Photo = InferSelectModel<typeof photos>;

export class SessionService {
  private static instance: SessionService;
  private s3Service: S3Service;

  private constructor() {
    this.s3Service = S3Service.getInstance();
  }

  public static getInstance(): SessionService {
    if (!SessionService.instance) {
      SessionService.instance = new SessionService();
    }
    return SessionService.instance;
  }

  async getAllSessionsByUser(user: AppUser) {
    const userSessions = await db
      .select({
        session: sessions,
        photos: photos,
      })
      .from(sessions)
      .innerJoin(sessionUsers, eq(sessions.id, sessionUsers.session_id))
      .leftJoin(photos, eq(sessions.id, photos.session_id))
      .where(eq(sessionUsers.user_id, user.id!))
      .orderBy(desc(sessions.createdAt));

    // Group photos by session and get signed URLs
    const sessionsWithPhotos = userSessions.reduce((acc, curr) => {
      const sessionId = curr.session.id;
      if (!acc[sessionId]) {
        acc[sessionId] = {
          ...curr.session,
          photos: [],
        };
      }
      if (curr.photos) {
        acc[sessionId].photos.push(curr.photos);
      }
      return acc;
    }, {} as Record<string, Session & { photos: Photo[] }>);

    // Get signed URLs for all photos
    const sessionsWithSignedUrls = await Promise.all(
      Object.values(sessionsWithPhotos).map(async (session) => {
        const photosWithUrls = await Promise.all(
          session.photos.map(async (photo) => ({
            ...photo,
            signedUrl: await this.s3Service.getSignedUrl(photo.s3_key),
          }))
        );
        return {
          ...session,
          photos: photosWithUrls,
        };
      })
    );

    return sessionsWithSignedUrls;
  }
}

// Export a singleton instance
export const sessionService = SessionService.getInstance();
