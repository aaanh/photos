import { FetchedImage } from "@/lib/image";
import { getImagesByYear } from "@/lib/actions";
import PhotoContainer from "./photo-container";

export default async function Gallery({ year }: { year: string }) {
  const images = await getImagesByYear(year);

  return (
    <section className="flex flex-col mb-8 rounded-lg">
      <div className="top-4 z-50 sticky flex justify-start items-center mb-6 w-fit font-mono transition-all duration-200 ease-in-out">
        <h3
          id={`year-${year}`}
          className="bg-primary/90 shadow-lg backdrop-blur-sm m-2 px-6 py-3 border border-primary/20 rounded-xl w-fit text-background"
        >
          Year::{year}
        </h3>
      </div>
      <div className="gap-4 space-y-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((img: FetchedImage) => (
          <PhotoContainer key={img.public_id} photo={img} />
        ))}
      </div>
    </section>
  );
}
