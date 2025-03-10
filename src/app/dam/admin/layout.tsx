import { ReactNode } from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function DamAdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
