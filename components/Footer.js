import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <span className="link-underline">
              Rachit Gupta{` © ${new Date().getFullYear()}`}
            </span>
          </div>
          {`•`}
          <div className="mx-1">
            <span className="link-underline">
              Have a good {currentDayName()}!
            </span>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <span className="link-underline">
              Rachit{` © ${new Date().getFullYear()}`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
