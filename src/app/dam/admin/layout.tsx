import { ReactNode } from "react";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "DAM Admin",
};

export default function DamAdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex items-center justify-center space-x-2 m-4"
        )}
        href={`/`}
      >
        <Image src="/static/icon.png" width="24" height="24" alt="Logo"></Image>
        <h1 className="text-xl">Anh&apos;s Photography</h1>
      </Link>
      {children}
    </main>
  );
}
