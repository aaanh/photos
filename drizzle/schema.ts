import { pgSchema, pgTable, text } from "drizzle-orm/pg-core";
import { InferSelectModel, relations, sql } from "drizzle-orm";
import { timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./supabaseSchema";

export const damSchema = pgSchema("dam");

export const admins = damSchema.table("admin_users", {
  id: uuid("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const sessions = damSchema.table("sessions", {
  id: uuid("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const sessionUsers = damSchema.table("session_users", {
  session_id: uuid("session_id")
    .references(() => sessions.id, {
      onDelete: "cascade",
    })
    .notNull(),
  user_id: uuid("user_id")
    .references(() => appUsers.id, {
      onDelete: "cascade",
    })
    .notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const photos = damSchema.table("photos", {
  id: uuid("id").defaultRandom(),
  session_id: uuid("session_id")
    .references(() => sessions.id, {
      onDelete: "cascade",
    })
    .notNull(),
  s3_key: text("s3_key").notNull(),
  s3_bucket: text("s3_bucket").notNull(),
  s3_region: text("s3_region").notNull(),
  title: text("title"),
  description: text("description"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const appUsers = damSchema.table("users", {
  id: uuid("id")
    .primaryKey()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
  name: text("name"),
});

export type AppUser = InferSelectModel<typeof appUsers>;
