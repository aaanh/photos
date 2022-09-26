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
      <div className="flex w-screen justify-center bg-yellow-500 p-4 text-neutral-900">
        <h1 className="text-2xl font-bold uppercase">
          Development in Progress
        </h1>
      </div>
      <NavigationBar></NavigationBar>
      {children}
    </>
  )
}

export default DefaultWrapperLayout
