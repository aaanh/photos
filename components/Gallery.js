import useSWR from "swr"

export default function Gallery({url, year}) {

  const fetcher = url => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(url, fetcher)

  return (
    <div className='p-4 flex flex-col mx-12 sm:mx-32'>
      <h2 className='text-4xl'>{year}</h2>
      <div className="border-b-2 border-neutral-900/20"></div>
      <br></br>
      <div className='columns-1 sm:columns-2 md:columns-3'>
        {
          data?.map((image, idx) => (
            <div key={idx} className="group relative mb-4 hover:z-50 hover:scale-150 transition-transform ease-in-out duration-50">
              <img src={image.url} className="w-full rounded-md group-hover:shadow-[-3px_5px_15px_5px_rgba(0,0,0,0.8)]"></img>
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
