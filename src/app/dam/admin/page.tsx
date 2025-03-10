import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { isAdmin } from "@/backend/user-service";
import { redirect } from "next/navigation";

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

  return (
    <div>
      <p>Admin Dashboard</p>
      <pre>
        <code>{JSON.stringify(user, null, " ")}</code>
      </pre>
    </div>
  );
}
