import { cn } from "@/lib/utils"
import "../globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: `Anh's Photo DAM`,
  description: 'Login to Digital Asset Management Platform',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        ></link>
      </head>
      <body
        className={cn(
          "flex flex-col items-center justify-center"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
