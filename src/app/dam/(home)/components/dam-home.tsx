"use client";

import { signOut } from "@/app/login/actions";
import { Button } from "@/components/ui/button";

export default function DamHome() {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
