import { FetchedImage } from "@/lib/image";
import { getImagesByYear } from "@/lib/actions";
import PhotoContainer from "./photo-container";

export default async function Gallery({ year }: { year: string }) {
  const images = await getImagesByYear(year);

  return (
    <section className="flex flex-col rounded-lg">
      <div className="font-mono sticky top-0 transition-all ease-in-out duration-200 bg-background/50 backdrop-blur-2xl bg-transparent backdrop-blur-0 flex items-center justify-center justify-start w-fit">
        <h3
          id={`year-${year}`}
          className="text-background m-2 px-4 bg-primary rounded-lg w-fit"
        >
          Year::{year}
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-[75vw] auto-rows-[10px]">
        {images.map((img: FetchedImage) => (
          <PhotoContainer key={img.public_id} photo={img} />
        ))}
      </div>
    </section>
  );
}
