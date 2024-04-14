export type ImageResponse = {
  secure_url: string;
  public_id: string;
  folder: string;
  width: number;
  height: number;
  format: string;
};

export type FetchedImage = {
  url: string;

  public_id: string;
  folder: string;
  width: number;
  height: number;
  format: string;
};
