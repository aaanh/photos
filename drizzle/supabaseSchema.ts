import { uuid } from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core";

export const authSchema = pgSchema("auth");

export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});
