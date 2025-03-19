import { pgSchema, pgTable, text } from "drizzle-orm/pg-core";
import { InferSelectModel, relations, sql } from "drizzle-orm";
import { timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./supabaseSchema";

export const appSchema = pgSchema("application");

export const admins = appSchema.table("admin_users", {
  id: uuid("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const sessions = appSchema.table("sessions", {
  id: uuid("id"),
  title: text("title"),
  description: text("description"),
  user_id: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const appUsers = appSchema.table("users", {
  id: uuid("id").references(() => users.id, {
    onDelete: "cascade",
  }),
  name: text("name"),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.user_id],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
}));

export type AppUser = InferSelectModel<typeof appUsers>;
