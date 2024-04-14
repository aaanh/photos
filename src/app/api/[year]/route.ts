import { FetchedImage, ImageResponse } from "@/lib/image";
import { NextResponse } from "next/server";

const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_API_NAME: api_name,
  CLOUDINARY_COLLECTION_ENDPOINT: collection_endpoint
} = process.env;

const headers = {
  Authorization: `Basic ${btoa(`${api_key}:${api_secret}`)}`
};

type Params = {
  year: string;
};

const query = (collection_endpoint: string, year: string): string => {
  return (
    collection_endpoint +
    `?expression=folder%3A${year}%20AND%20resource_type%3Aimage`
  );
};

async function getManifestByYear(year: string): Promise<Response> {
  if (!collection_endpoint || !headers) {
    throw new Error("Collection endpoint or headers are not defined");
  }
  return fetch(query(collection_endpoint, year), { headers: headers });
}

export async function GET(request: Request, ctx: { params: Params }) {
  const year = ctx.params.year as string;

  const res = await getManifestByYear(year);
  const images = await res.json();

  return NextResponse.json(
    {
      body: images.resources?.map((image: ImageResponse) => {
        return {
          url:
            image.secure_url.substring(0, 45) +
            "/w_1000,c_scale" +
            image.secure_url.substring(45),
          public_id: image.public_id,
          folder: image.folder,
          width: image.width,
          height: image.height,
          format: image.format
        } as FetchedImage;
      })
    },
    { status: 200 }
  );
}
