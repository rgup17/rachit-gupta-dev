import CursorTrail from '@/components/CursorTrail'

export default function Resume() {
  return (
    <>
    <CursorTrail />
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-xl font-extrabold mb-4">My Resume</h1>
      <p className="mb-6 text-center text-lg">
        Last updated 01/19/2025
      </p>

      {/* Full Resume Display */}
      <div className="w-full max-w-6xl h-screen mb-6 border-4 border-pink-500 border-2 shadow-lg hover:shadow-pink-500 transition-shadow duration-300 rounded-lg p-2">
        <embed
          src="/rachit_gupta_resume.pdf"
          type="application/pdf"
          className="w-full h-full"
          title="Full Resume"
        />
      </div>

    </div>
    </>
  )
}
