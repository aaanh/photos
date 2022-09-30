import NavigationBar from '../components/NavigationBar'
import SEO from '../components/SEO'

const DefaultWrapperLayout = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <SEO title={title} description={description}></SEO>
      <div className="flex justify-center bg-yellow-500 p-4 text-neutral-900">
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
