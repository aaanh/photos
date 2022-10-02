import DefaultWrapperLayout from '../layouts/DefaultWrapperLayout'
import SEO from '../components/SEO'

const ContactPage = () => {
  return (
    <DefaultWrapperLayout>
      <SEO title="Contact | Anh's Photography" description="hmu fam"></SEO>
      <div className='p-4 flex w-screen justify-center flex-col items-center'>
        <h1 className='text-4xl'>Contacts</h1>
        <div className='flex flex-col my-2 space-y-2'>
          <ul>
            <li>All business and general inquiries: <a className='underline underline-offset-2 hover:font-semibold' href="mailto:overlord@hoanganh.dev">{'overlord [at] hoanganh [dot] dev'}</a></li>
          </ul>
        </div>
      </div>
    </DefaultWrapperLayout>
  )
}

export default ContactPage
