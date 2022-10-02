export default function Gallery({data, year}) {

  return (
    <div className='p-4'>
      <h2 className='text-4xl'>{year}</h2>
      <hr></hr>
      <br></br>
      <div className='flex flex-wrap justify-center items-center'>
        {
          data?.map((image, idx) => (
            <div key={idx} className="group relative mr-2 mb-2">
              <img src={image.url} className="w-80"></img>
              <div className="absolute bottom-0 left-0 p-1 text-transparent transition-all duration-200 ease-in-out group-hover:bg-neutral-900 group-hover:text-white">
                {'#' + (idx + 1)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
