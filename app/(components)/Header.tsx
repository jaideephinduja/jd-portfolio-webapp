import Link from 'next/link'
import CommandPalette from './CommandPalette'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-900/70 bg-[#0b0f1a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="font-semibold">JH</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/education">Education</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a className="rounded border border-gray-700 px-3 py-1 text-sm" href="/recruiter">Recruiter View</a>
          <a className="rounded bg-brand px-3 py-1 text-sm text-black" href="/resume/Jaideep_Hinduja_Resume.pdf" download>Download PDF</a>
        </div>
      </div>
      <CommandPalette />
    </header>
  )
}








