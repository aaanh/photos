import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { years } from "@/lib/years";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh's Photography",
  description: "Select pictures I have taken over the years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Heading></Heading>
      <div className="flex flex-wrap justify-center items-center space-x-2 p-4">
        <span>Go to:&nbsp;</span>
        {years.map((year, idx) => (
          <Link
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex items-center justify-center space-x-2"
            )}
            key={idx}
            href={`#year-${year}`}
          >
            {year}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
