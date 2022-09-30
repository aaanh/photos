
const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_API_NAME: api_name
} = process.env

const headers = {
  'Authorization': `Basic ${btoa(`${api_key}:${api_secret}`)}`,
}
const COLLECTION_ENDPOINT = `https://api.cloudinary.com/v1_1/aaanh/resources/image`

export const getManifest = async () => {
  return fetch(COLLECTION_ENDPOINT, { headers: headers })
}

export default async (_, res) => {
  const response = await getManifest()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ dataRetrieved: false });
  }

  const data = await response.json()
  const images = data.resources.map((image) => {
    return {
      url: image.secure_url,
      public_id: image.public_id,
      width: image.width,
      height: image.height,
      format: image.format,
    }
  })

  res.status(200).json(images)
}