import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo-color-variant.png"></link>
      <meta
        property="og:image"
        content="https://res.cloudinary.com/aaanh/image/upload/w_500,c_scale/v1689623648/2023/DSC_5005_nozego.jpg"
      />
    </Head>
  );
};

export default SEO;
