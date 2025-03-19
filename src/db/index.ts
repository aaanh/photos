import { env } from "@/env/server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";
import { pgSchema } from "drizzle-orm/pg-core";

const connString = env.DATABASE_URL;

class Database {
  private static instance: Database;
  private dbClient: postgres.Sql;
  private db: ReturnType<typeof drizzle<typeof schema>>;

  private constructor() {
    this.dbClient = postgres(connString, { prepare: false });
    this.db = drizzle(this.dbClient, { schema });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getClient(): postgres.Sql {
    return this.dbClient;
  }

  public getDb(): ReturnType<typeof drizzle<typeof schema>> {
    return this.db;
  }
}

const database = Database.getInstance();
export const dbClient = database.getClient();
export const db = database.getDb();
