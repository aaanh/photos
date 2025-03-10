import { Label } from "@/components/ui/label";
import { login } from "./actions";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import bgLayeredWaves from "./bg-layered-waves.svg";

export default function LoginPage() {
  return (
    <section className="relative flex flex-col justify-center items-center gap-4 w-screen min-h-screen">
      <Image
        src={bgLayeredWaves}
        alt="background"
        className="top-0 right-0 bottom-0 left-0 -z-10 absolute w-screen h-screen object-cover"
      />
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex items-center justify-center space-x-2"
        )}
        href={`/`}
      >
        <Image src="/static/icon.png" width="24" height="24" alt="Logo"></Image>
        <h1 className="text-xl">Anh&apos;s Photography</h1>
      </Link>
      <div className="z-50 flex flex-col justify-center items-center gap-4 bg-background/90 shadow-lg px-4 py-8 border rounded-lg">
        <form className="flex flex-col gap-2">
          <Label className="font-bold" htmlFor="email">
            Email
          </Label>
          <Input id="email" name="email" type="email" required />
          <Label className="font-bold" htmlFor="password">
            Password
          </Label>
          <Input id="password" name="password" type="password" required />
          <button
            className={cn(
              buttonVariants({ variant: "default" }),
              "hover:cursor-pointer"
            )}
            formAction={login}
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
}
