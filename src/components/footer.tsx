import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const linkClass =
  "text-sm underline underline-offset-2 hover:text-green-500 transition-colors";

export function FloatingFooter() {
  return (
    <footer className="min-h-96 mt-12 w-full flex bg-background/80 backdrop-blur-md justify-center">
      <div className="rounded-2xl shadow-lg border w-full m-4 p-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 justify-start">
        <div className="flex min-w-0 gap-2 font-thin flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tracking-wide">
              aaanh <span className="tracking-tighter font-mono">/|\</span>{" "}
              photography
            </span>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <p className="text-sm text-muted-foreground">
              © 2026. All Rights Reserved.
            </p>
          </div>
          <p className="text-sm">
            For business or licensing inquiries, contact{" "}
            <a className={linkClass} href="mailto:business@aaanh.ca">
              business@aaanh.ca
            </a>
            .
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Site
          </p>
          <nav className="flex flex-col gap-2 text-sm">
            <Link className={linkClass} href="/">
              Home
            </Link>
            <Link className={linkClass} href="/about">
              About
            </Link>
            <p className="text-sm text-muted-foreground pt-1">
              Gear, stack, and credits live on About.
            </p>
          </nav>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Elsewhere
          </p>
          <nav className="flex flex-col gap-2 text-sm">
            <a
              className={linkClass}
              href="https://aaanh.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              aaanh.com
            </a>
            <a
              className={linkClass}
              href="https://github.com/aaanh/my-photo-reel"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source on GitHub
            </a>
          </nav>
        </div>

        <div className="col-span-full border-2 border-purple-600 font-light font-serif tracking-wider h-fit w-fit justify-self-center min-w-0 p-4 rounded-lg">
          <p className="text-center">
            Images may not be reproduced without permission. Prints and
            editorial use with licensing agreements available on request.
          </p>
        </div>
      </div>
    </footer>
  );
}
