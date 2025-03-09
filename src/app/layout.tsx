import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>

  );
}