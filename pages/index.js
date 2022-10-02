import Gallery from '../components/Gallery'
import DefaultWrapperLayout from '../layouts/DefaultWrapperLayout'
import SEO from '../components/SEO'

const HomePage = () => {

  // const fetcher = url => fetch(url).then((res) => res.json())
  const years = ['2022', '2020', '2019']

  // const {data_2022, error } = useSWR('/api/images/2022', fetcher)

  // years.forEach((year) => {
  //   const { res, error } = useSWR(`/api/images/${year}`, fetcher)
  //   data[`${year}`] = res
  // })

  return (
    <DefaultWrapperLayout>
      <SEO title="Anh's Photography" description="My Photo Reels"></SEO>
      <div className="flex flex-wrap justify-center space-x-4 overflow-x-hidden">
        <div className="group relative my-4">
          <img src='/splash.jpg' alt="splash" className="z-0 w-64 rounded-xl"></img>
          <div className="absolute bottom-0 left-0 z-10 p-2 text-transparent transition-all duration-200 ease-in-out group-hover:bg-neutral-900 group-hover:text-white">
            Me wandering somewhere in Japan (2015)
          </div>
        </div>
        <div className="flex sm:w-2/5 sm:flex-col justify-center sm:space-y-4">
          <p>
            <span className="font-bold">Anh H Nguyen</span> is a photography
            addict who likes to meddle with cool new cameras and accessories. He
            mostly shoots landscapes and natural sceneries.
          </p>
          <p>
            By day, he is a software engineer. By night, man rigs up with his
            backpack full of gear, trying to capture the best moment of his
            surroundings.
          </p>
        </div>
      </div>
      {
        years.map((year, idx) => 
          <Gallery key={idx} url={'/api/images/'+year} year={year}></Gallery>
        )
      }
    </DefaultWrapperLayout>
  )
}

export default HomePage
