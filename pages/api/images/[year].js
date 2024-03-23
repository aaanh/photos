const {
  CLOUDINARY_API_KEY: api_key,
  CLOUDINARY_API_SECRET: api_secret,
  CLOUDINARY_API_NAME: api_name
} = process.env;

const headers = {
  Authorization: `Basic ${btoa(`${api_key}:${api_secret}`)}`
};

const COLLECTION_ENDPOINT = `https://api.cloudinary.com/v1_1/aaanh/resources/search`;

const CompleteQuery = (collection_endpoint, year) => {
  const query =
    collection_endpoint +
    `?expression=folder%3A${year}%20AND%20resource_type%3Aimage`;
  return query;
};

export const getManifest = async (year) => {
  return fetch(CompleteQuery(COLLECTION_ENDPOINT, year), { headers: headers });
};

export const getStaticPaths = async () => {
  const years_to_query = ["2024", "2023", "2022", "2020", "2019"];
  const paths = years_to_query.map((year) => {
    return {
      params: { year: year.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (ctx) => {
  const year = ctx;

  const res = await getManifest(year);
  const images = await res.json();

  return {
    props: {
      images
    }
  };
};

const response = async (req, res) => {
  const response = await getStaticProps(req.query.year);

  const data = response.props.images.resources?.map((image) => {
    return {
      url:
        image.secure_url.substring(0, 45) +
        "/w_800,c_scale" +
        image.secure_url.substring(45),
      public_id: image.public_id,
      folder: image.folder,
      width: image.width,
      height: image.height,
      format: image.format
    };
  });

  res.status(200).json(data);
};

export default response;
