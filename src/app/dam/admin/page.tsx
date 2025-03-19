import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getAllAccounts, isAdmin } from "./actions";

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const isUserAdmin = await isAdmin(user.id);

  if (!isUserAdmin) {
    redirect("/");
  }

  const accounts = await getAllAccounts();

  return (
    <div className="mx-auto p-4 container">
      <h1>Administrator Dashboard</h1>
      <div className="gap-4 grid">
        <pre>
          <code>{JSON.stringify(accounts, null, " ")}</code>
        </pre>
      </div>
    </div>
  );
}
