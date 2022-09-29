import placeholder from './placeholder.jpg'

const Gallery = () => {
  const rng_photos = Math.floor(Math.random() * 20) + 5

  const year_range = [...Array(8).keys()].map((i) => i + 2015)

  const placeholders = []
  for (let i = 0; i < rng_photos; i++) {
    placeholders.push(
        <div className="group relative mr-2 mb-2">
          <img key={i} src={placeholder} alt="placeholder" className="w-60"></img>
          <div className="absolute bottom-0 left-0 p-1 text-transparent transition-all duration-200 ease-in-out group-hover:bg-neutral-900 group-hover:text-white">
            {'#' + i}
          </div>
        </div>
    )
  }

  return (
    <>
    {  year_range.map((year, index) => (
        <div className='w-11/12 flex flex-col m-8 overflow-x-hidden'>
          <h3 className='text-4xl my-4 font-bold' key={index}>{year}</h3>
          <div className='flex flex-wrap'>
            {
              placeholders.map((placeholder, index) => (
                <div key={index}>{placeholder}</div>
              ))
            }
          </div>
        </div>
      ))}
    </>
  )
}

export default Gallery
