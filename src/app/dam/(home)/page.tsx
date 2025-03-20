import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DamHome from "./components/dam-home";
import { getSessions } from "./actions";
import Image from "next/image";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { sessions } = await getSessions();

  return (
    <div className="mx-auto p-4 container">
      <h1 className="mb-4 font-bold text-2xl">Welcome, {data.user.email}</h1>

      <div className="gap-6 grid">
        {sessions.map((session) => (
          <div key={session.id} className="p-4 border rounded-lg">
            <h2 className="mb-2 font-semibold text-xl">{session.title}</h2>
            <p className="mb-4 text-gray-600">{session.description}</p>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {session.photos.map((photo) => (
                <div key={photo.id} className="relative aspect-square">
                  <Image
                    src={photo.signedUrl}
                    alt={photo.title || "Photo"}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DamHome />
    </div>
  );
}
