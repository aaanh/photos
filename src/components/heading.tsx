import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./darkmode-toggle";
import Image from "next/image";

export default function Heading() {
  return (
    <div
      className={`pb-2 px-4 lg:pt-2 flex flex-col justify-center items-center space-y-2 lg:space-y-0 w-full sticky top-0 bg-background/80 backdrop-blur-2xl`}
    >
      <div className=""></div>
      <div className="flex flex-col justify-center items-center">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center justify-center space-x-2"
          )}
          href={`/`}
        >
          <Image
            src="/static/icon.png"
            width="24"
            height="24"
            alt="Logo"
          ></Image>
          <h1 className="text-xl">Anh&apos;s Photography</h1>
        </Link>
        <nav>
          <ul className="flex space-x-2 flex-wrap items-center justify-center">
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <a
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "flex items-center justify-center space-x-2"
                )}
                href={"https://aaanh.com"}
              >
                aaanh.com
              </a>
            </li>
            <li className="flex justify-center items-center m-2">
              <ModeToggle></ModeToggle>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
}
