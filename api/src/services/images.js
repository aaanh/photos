const {
  REDWOOD_ENV_CLOUDINARY_API_KEY: api_key,
  REDWOOD_ENV_CLOUDINARY_API_SECRET: api_secret,
  REDWOOD_ENV_CLOUDINARY_API_NAME: api_name
} = process.env

const api_endpoint = `https://${api_key}:${api_secret}@api.cloudinary.com/v1_1/${api_name}/resources/image`

export const getAssetManifest = async () => {
  fetch(api_endpoint)
    .then(res => res.json())
  return res
};

export default async (_, res) => {
  const response = await getAssetManifest();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({  })
  }

}
