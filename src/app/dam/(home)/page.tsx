import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import DamHome from "./components/dam-home";
import { getSessions } from "./actions";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const photoshootSessions = await getSessions();

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <pre>
        <code>{JSON.stringify(photoshootSessions, null, " ")}</code>
      </pre>
      <DamHome />
    </div>
  );
}
