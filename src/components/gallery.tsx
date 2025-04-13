import { FetchedImage } from "@/lib/image";
import { getImagesByYear } from "@/lib/actions";
import PhotoContainer from "./photo-container";

export default async function Gallery({ year }: { year: string }) {
  const images = await getImagesByYear(year);

  return (
    <section className="flex flex-col rounded-lg">
      <div className="top-22 md:top-0 sticky flex justify-start items-center w-fit font-mono transition-all duration-200 ease-in-out">
        <h3
          id={`year-${year}`}
          className="bg-primary m-2 px-4 rounded-lg w-fit text-background"
        >
          Year::{year}
        </h3>
      </div>
      <div className="grid grid-cols-[75vw] lg:grid-cols-3 auto-rows-[10px]">
        {images.map((img: FetchedImage) => (
          <PhotoContainer key={img.public_id} photo={img} />
        ))}
      </div>
    </section>
  );
}
