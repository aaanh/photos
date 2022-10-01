import Link from 'next/link'

const NavigationBar = () => {
  const button_style =
    'hover:border-b-neutral-500 border-2 border-transparent px-4 inline-flex items-center transition-all duration-300 ease-in-out px-2 font-light text-sm sm:text-xl'

  return (
    <div className="flex sm:h-16 w-full items-center justify-center space-x-4">
      <div className="flex justify-center bg-neutral-900 px-2 py-2 sm:py-0 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black">
        <h1 className="text-sm sm:text-xl font-bold">
          <Link href='/'>Anh&apos;s Photography Reels</Link>
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="flex justify-center space-x-2">
          <li className={button_style}>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className={button_style}>
            <Link href="/about">About</Link>
          </li>
          <li className={button_style}>
            <Link href="https://aaanh.ca">Homepage</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
