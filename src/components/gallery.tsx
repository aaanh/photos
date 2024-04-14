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
    <section className="flex flex-col w-full">
      <div className="my-4 font-mono sticky lg:top-0 top-44 transition-all ease-in-out duration-200 bg-background/80 backdrop-blur-2xl w-screen lg:w-full lg:bg-transparent lg:backdrop-blur-0">
        <h2
          id={`year-${year}`}
          className="text-primary m-4 px-4 bg-primary/10 rounded-lg w-fit"
        >
          Year::{year}
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-[10px]">
        {images.map((img: FetchedImage, idx: number) => (
          <PhotoContainer key={img.public_id} photo={img}></PhotoContainer>
        ))}
      </div>
    </section>
  );
}
