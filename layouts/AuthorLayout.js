import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'
import CursorTrail from '@/components/CursorTrail'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <CursorTrail />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3"></div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#DE1D8D"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1}
              </RoughNotation>
            </p>

            <p className="sm:block md:hidden lg:hidden">
              I am always looking to learn new things. I am currently working on a few projects
              related to{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#DE1D8D"
                strokeWidth="1"
                show={true}
              >
                <span className="text-black dark:text-white">
                  Backend Development/Full Stack/AI.{' '}
                </span>
              </RoughNotation>
              &nbsp;I am seeking software engineering internships where I can apply my skills in
              backend development and contribute to creating robust, high-performing systems. I
              thrive in environments that challenge me to innovate and make a positive impact on
              users.
            </p>
            <p className="hidden md:block">
              I am always looking to learn new things. I am currently working on a few projects
              related to{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#DE1D8D"
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">
                  Backend Development/Full Stack/AI.{' '}
                </span>
              </RoughNotation>
              &nbsp;I am seeking software engineering internships where I can apply my skills in
              backend development and contribute to creating robust, high-performing systems. I
              thrive in environments that challenge me to innovate and make a positive impact on
              users.
            </p>
            <p>
              I am always interested in collaborating with others on exciting projects and enjoy
              exchanging ideas about technology. Feel free to reach out if you have anything to talk
              about, you can reach me through{' '}
              <Link
                href={'mailto:rachitgupta428@gmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0-2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
              or{' '}
              <Link
                href={'https://www.linkedin.com/in/rachitgupta1/'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0-2z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Skills
            </h1>
          </div>
          <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                Programming Languages
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C</li>
              </ul>
            </div>

            {/* Backend Technologies */}
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                Backend Technologies
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Spring Boot</li>
                <li>Kafka</li>
                <li>Redis</li>
                <li>REST APIs</li>
                <li>WebSockets</li>
              </ul>
            </div>

            {/* Frontend Technologies */}
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                Frontend Technologies
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Chakra UI</li>
                <li>AG Grid</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">Databases</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
              </ul>
            </div>

            {/* Concepts */}
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">Concepts</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Microservices Architecture</li>
                <li>Event-Driven Systems</li>
                <li>Caching</li>
                <li>Agile Methodology</li>
                <li>Authentication/Authorization</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="rounded-lg border-2 border-pink-500 bg-gray-200 p-6 shadow-lg transition-shadow duration-300 hover:shadow-pink-500 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">Tools</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Git</li>
                <li>IntelliJ IDEA</li>
                <li>Maven</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
