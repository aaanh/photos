import NavigationBar from '../components/NavigationBar'
import SEO from '../components/SEO'

const DefaultWrapperLayout = ({ children }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      {children}
    </>
  )
}

export default DefaultWrapperLayout
