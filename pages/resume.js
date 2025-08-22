import CursorTrail from '@/components/CursorTrail'
import { useEffect, useState } from 'react'

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
  }, [])

  return (
    <>
      <CursorTrail />
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
        <h1 className="mb-4 text-xl font-extrabold">My Resume</h1>
        <p className="mb-6 text-center text-lg">Last updated 08/22/2025</p>

        <div className="mb-6 w-full max-w-6xl rounded-lg border-2 border-pink-500 p-2 shadow-lg">
          {/* Desktop: show iframe + both buttons */}
          {!isMobile ? (
            <>
              <iframe
                src="/rachit_gupta_resume.pdf#toolbar=0"
                className="h-[80vh] w-full"
                title="Full Resume"
              />
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href="/rachit_gupta_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-pink-500 px-4 py-2 font-semibold text-black shadow-md transition hover:bg-pink-400"
                >
                  View Fullscreen
                </a>
                <a
                  href="/rachit_gupta_resume.pdf"
                  download="Rachit_Gupta_Resume.pdf"
                  className="rounded-lg bg-pink-500 px-4 py-2 font-semibold text-black shadow-md transition hover:bg-pink-400"
                >
                  Download PDF
                </a>
              </div>
            </>
          ) : (
            // Mobile: only "View Fullscreen"
            <div className="flex justify-center">
              <a
                href="/rachit_gupta_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-pink-500 px-6 py-3 font-semibold text-black shadow-md transition hover:bg-pink-400"
              >
                View/Download Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
