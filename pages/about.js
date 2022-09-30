
import DefaultWrapperLayout from '../layouts/DefaultWrapperLayout'

const AboutPage = () => {
  return (
    <DefaultWrapperLayout>
      <div className='p-4'>
        <h1 className='text-4xl'>About This Site</h1>
        <div className='flex flex-col my-2 space-y-2'>
          <h2 className='text-2xl'>Technical Information</h2>
          <ul>
            <li>Built with RedwoodJS</li>
            <li>Asset storage with Cloudinary</li>
            <li>Database and API with Prisma</li>
            <li>Hosted on Vercel</li>
            <li>DNS and CDN with Cloudflare</li>
            <li>Source code: <a className='underline underline-offset-2 hover:font-semibold' href="https://github.com/aaanh/my-photo-reel">Github</a></li>
          </ul>
        </div>
      </div>
    </DefaultWrapperLayout>
  )
}

export default AboutPage
