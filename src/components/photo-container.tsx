import { FetchedImage } from "@/lib/image";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function PhotoContainer({ photo }: { photo: FetchedImage }) {
  const ratio = photo.height / photo.width;
  const galleryHeight = Math.ceil(300 * ratio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`w-[300px] justify-self-center m-2`}
      style={{
        height: galleryHeight,
        gridRow: `span ${photoSpans}`
      }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <div className={`rounded-xl overflow-hidden group`}>
              {isLoading ? (
                <Image
                  width={300}
                  height={300}
                  alt={photo.public_id}
                  src="/static/icon-small.png"
                  className="z-50 animate-spin opacity-50 blur-2xl"
                ></Image>
              ) : null}

              <Image
                src={photo.url}
                alt={photo.public_id}
                width={300}
                height={galleryHeight}
                onLoadingComplete={() => setIsLoading(false)}
                sizes="300px"
              ></Image>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="flex items-center justify-center">
          <div
            className={`rounded-xl overflow-hidden h-[80vh] w-full relative`}
          >
            <Image
              src={photo.url}
              alt={photo.public_id}
              fill={true}
              objectFit="contain"
            ></Image>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
