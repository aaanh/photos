
const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_API_NAME: api_name
} = process.env

const headers = {
  'Authorization': `Basic ${btoa(`${api_key}:${api_secret}`)}`,
}

const COLLECTION_ENDPOINT = `https://api.cloudinary.com/v1_1/aaanh/resources/search`

const CompleteQuery = (collection_endpoint, year) => {
  const query = collection_endpoint + `?expression=folder%3A${year}%20AND%20resource_type%3Aimage`
  return query
}

export const years_to_query = [2022, 2020, 2019]

export const getManifest = async (year) => {
  return fetch(CompleteQuery(COLLECTION_ENDPOINT, year), { headers: headers })
}

export default async (_, res) => {
  const response = {}

  for (var year in years_to_query) {
    response[year] = await getManifest(year)
  }

  const data = await response.json()
  const images = data.resources.map((image) => {
    return {
      url: image.secure_url,
      public_id: image.public_id,
      folder: image.folder,
      width: image.width,
      height: image.height,
      format: image.format,
    }
  })

  res.status(200).json(images)
}