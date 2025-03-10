import { pgSchema, pgTable, text } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { timestamp, uuid } from "drizzle-orm/pg-core";

export const appSchema = pgSchema("application");

export const authSchema = pgSchema("auth");

export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name").notNull(),
  user_id: uuid("user_id")
    .references(() => users.id)
    .notNull(),
});

export const admins = appSchema.table("admin_users", {
  id: text("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});
