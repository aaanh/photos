"use client";

import { FetchedImage } from "@/lib/image";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export default function PhotoContainer({ photo }: { photo: FetchedImage }) {
  const ratio = photo.height / photo.width;
  const galleryHeight = Math.ceil(300 * ratio);
  const photoSpans = Math.ceil(galleryHeight / 10);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`w-[300px] justify-self-center p-2`}
      style={{
        height: galleryHeight,
        gridRow: `span ${photoSpans}`,
      }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button>
            <div className={`rounded-lg overflow-hidden group`}>
              {isLoading ? (
                <Image
                  width={300}
                  height={300}
                  alt={photo.public_id}
                  src="/static/icon-small.png"
                  className="z-50 opacity-50 blur-2xl animate-spin"
                  priority
                ></Image>
              ) : null}

              <Image
                src={photo.url}
                alt={photo.public_id}
                width={300}
                height={galleryHeight}
                onLoad={() => setIsLoading(false)}
                sizes="300px"
              ></Image>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="flex justify-center items-center">
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
