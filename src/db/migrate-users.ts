import { db } from "."; // Assuming db is your Drizzle ORM instance
import { users } from "../../drizzle/supabaseSchema"; // Import users directly
import { appUsers as accounts } from "../../drizzle/schema"; // Assuming the public.accounts table schema
import { InferSelectModel } from "drizzle-orm";

async function migrateUsersToAccounts() {
  try {
    // Query users from the auth.users table
    const usersList = await db.select().from(users).execute();

    console.log(`Found ${usersList.length} users to migrate`);

    // Prepare rows to insert into public.accounts
    const accountRows = usersList.map(
      (user: InferSelectModel<typeof users>) => ({
        id: user.id,
        fullName: "", // You might want to set a default value or get this from another source
        user_id: user.id,
      })
    );

    // Insert the rows into the accounts table
    if (accountRows.length > 0) {
      await db.insert(accounts).values(accountRows);
      console.log(
        `${accountRows.length} accounts were inserted into the accounts table.`
      );
    } else {
      console.log("No users found to insert.");
    }
  } catch (error) {
    console.error("Error during migration:", error);
    throw error;
  } finally {
    process.exit(0);
  }
}

// Call the migration function to execute the operation
migrateUsersToAccounts().catch((err) => {
  console.error("Error during migration:", err);
  process.exit(1);
});
