import NavigationBar from 'src/components/NavigationBar/NavigationBar'
import Seo from 'src/components/Seo/Seo'

type DefaultWrapperLayoutProps = {
  children?: React.ReactNode
  title?: string
  description?: string
}

const DefaultWrapperLayout = ({
  children,
  title,
  description,
}: DefaultWrapperLayoutProps) => {
  return (
    <>
      <Seo title={title} description={description}></Seo>
      <NavigationBar></NavigationBar>
      {children}
    </>
  )
}

export default DefaultWrapperLayout
