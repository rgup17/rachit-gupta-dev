import CursorTrail from '@/components/CursorTrail'

export default function Resume() {
  return (
    <>
      <CursorTrail />
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="mb-4 text-xl font-extrabold">My Resume</h1>
        <p className="mb-6 text-center text-lg">Last updated 01/19/2025</p>

        {/* Full Resume Display */}
        <div className="mb-6 h-screen w-full max-w-6xl rounded-lg border-4 border-2 border-pink-500 p-2 shadow-lg transition-shadow duration-300 hover:shadow-pink-500">
          <embed
            src="/rachit_gupta_resume.pdf"
            type="application/pdf"
            className="h-full w-full"
            title="Full Resume"
          />
        </div>
      </div>
    </>
  )
}
