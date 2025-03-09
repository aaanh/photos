import { ReactNode } from "react";

export default function DamAdminLayout({ children }: { children: ReactNode }) {
  return <main>
    {children}
  </main>
}