import placeholder from './placeholder.jpg'

const Gallery = () => {
  const rng_photos = Math.floor(Math.random() * 100)

  const placeholders = []
  for (let i = 0; i < rng_photos; i++) {
    placeholders.push(
      <div className="group relative m-2">
        <img key={i} src={placeholder} alt="placeholder" className="w-64"></img>
        <div className="absolute bottom-0 left-0 p-1 text-transparent transition-all duration-200 ease-in-out group-hover:bg-neutral-900 group-hover:text-white">
          {'#' + i}
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-screen flex-wrap justify-center">{placeholders}</div>
  )
}

export default Gallery
