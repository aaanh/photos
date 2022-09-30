import useSWR from 'swr'

export default function Gallery () {

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/images', fetcher)

  return (
    <div className='p-4'>
      <h2 className='text-4xl'>2022</h2>
      <hr></hr>
      <br></br>
      <div className='flex flex-wrap justify-center items-center'>
        {
          data?.map((image, idx) => (
          <div className="group relative mr-2 mb-2">
            <img key={idx} src={image.url} className="w-80"></img>
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
