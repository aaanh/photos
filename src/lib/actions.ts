'use server';

import { FetchedImage, ImageResponse } from "./image";

const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_API_NAME: api_name,
  CLOUDINARY_COLLECTION_ENDPOINT: collection_endpoint
} = process.env;

const headers = {
  Authorization: `Basic ${Buffer.from(`${api_key}:${api_secret}`).toString('base64')}`
};

const query = (collection_endpoint: string, year: string): string => {
  return (
    collection_endpoint +
    `?expression=folder%3A${year}%20AND%20resource_type%3Aimage`
  );
};

export async function getImagesByYear(year: string): Promise<FetchedImage[]> {
  if (!collection_endpoint || !headers) {
    throw new Error("Collection endpoint or headers are not defined");
  }

  const res = await fetch(query(collection_endpoint, year), { headers: headers });
  const images = await res.json();

  return images.resources?.map((image: ImageResponse) => ({
    url:
      image.secure_url.substring(0, 45) +
      "/w_1000,c_scale" +
      image.secure_url.substring(45),
    public_id: image.public_id,
    folder: image.folder,
    width: image.width,
    height: image.height,
    format: image.format
  })) || [];
} 