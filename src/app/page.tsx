"use client";
import Gallery from "@/components/gallery";
import { years } from "@/lib/years";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {years.map((year: string, idx: number) => (
        <Gallery key={year} year={year}></Gallery>
      ))}
    </main>
  );
}
