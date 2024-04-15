import { FetchedImage, ImageResponse } from "@/lib/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import PhotoContainer from "./photo-container";

export default function Gallery({ year }: { year: string }) {
  const [images, setImages] = useState<FetchedImage[]>([]);

  useEffect(() => {
    async function fetchUrls() {
      const res = await fetch(`/api/${year}`);
      const imgs = (await res.json()).body as FetchedImage[];
      setImages(imgs);
    }

    fetchUrls();
  }, []);

  return (
    <section className="flex flex-col rounded-lg">
      <div className="font-mono sticky lg:top-0 top-[8.5rem] transition-all ease-in-out duration-200 bg-background/50 backdrop-blur-2xl w-screen lg:w-full lg:bg-transparent lg:backdrop-blur-0 flex items-center justify-center lg:justify-start">
        <h3
          id={`year-${year}`}
          className="text-background m-2 px-4 bg-primary rounded-lg w-fit"
        >
          Year::{year}
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-[10px]">
        {images.map((img: FetchedImage, idx: number) => (
          <PhotoContainer key={img.public_id} photo={img}></PhotoContainer>
        ))}
      </div>
    </section>
  );
}
