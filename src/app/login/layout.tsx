import { cn } from "@/lib/utils";
import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: `Anh's Photo DAM`,
  description: "Login to Digital Asset Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
