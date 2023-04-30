import Head from 'next/head'

const SEO = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo-color-variant.png"></link>
      <meta property="og:image" content="https://photos.aaanh.ca/splash.jpg" />
    </Head>
  )
}

export default SEO
