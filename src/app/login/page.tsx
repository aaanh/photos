import { Label } from '@/components/ui/label'
import { login } from './actions'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className='flex flex-col gap-4'>
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
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
      <form className='flex flex-col gap-2'>
        <Label htmlFor="email">Email:</Label>
        <Input id="email" name="email" type="email" required />
        <Label htmlFor="password">Password:</Label>
        <Input id="password" name="password" type="password" required />
        <button className={cn(buttonVariants({ variant: "default" }), "hover:cursor-pointer")} formAction={login}>Log in</button>
      </form>
    </section>
  )
}