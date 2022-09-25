import { MetaTags } from '@redwoodjs/web'

type SeoProps = {
  title?: string
  description?: string
}

const Seo = ({ title, description }: SeoProps) => {
  return (
    <>
      <MetaTags title={title} description={description}></MetaTags>
    </>
  )
}

export default Seo
