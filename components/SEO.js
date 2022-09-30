import head from 'next/head'

const SEO = ({ title, description }) => {
  return (
    <>
      <head title={title} description={description}></head>
    </>
  )
}

export default SEO
