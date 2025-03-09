import Gallery from "@/components/gallery";
import { years } from "@/lib/years";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {years.map((year: string) => (
        <Gallery key={year} year={year} />
      ))}
    </main>
  );
}
