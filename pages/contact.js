import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'
import CursorTrail from '@/components/CursorTrail'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <CursorTrail />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="mt-32 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:rachitgupta428@gmail.com"
              title="gmail"
              icon="rachitgupta428"
            />
            <ContactLink href="https://github.com/rgup17" title="github" icon="rgup17" />

            <ContactLink
              href="https://www.linkedin.com/in/rachitgupta1/"
              title="linkedin"
              icon="rachitgupta1"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
