export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">Jaideep Hinduja</h1>
        <p className="mt-3 text-lg text-gray-300">Senior AI/Engineering leader (ex‑eBay) driving enterprise‑scale GenAI, Conversational AI, and AI platforms.</p>
        <div className="mt-6 flex gap-3">
          <a className="rounded bg-brand px-4 py-2 font-medium text-black" href="/recruiter">Recruiter View</a>
          <a className="rounded border border-gray-700 px-4 py-2" href="/resume/Jaideep_Hinduja_Resume.pdf" download>Download PDF</a>
          <a className="rounded border border-gray-700 px-4 py-2" href="#contact">Contact</a>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <a className="rounded border border-gray-800 p-6 hover:border-brand" href="/experience">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="mt-2 text-sm text-gray-400">eBay, Simext, Zycus and more — leadership and impact.</p>
        </a>
        <a className="rounded border border-gray-800 p-6 hover:border-brand" href="/projects">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-sm text-gray-400">Flagship initiatives with outcomes and diagrams.</p>
        </a>
        <a className="rounded border border-gray-800 p-6 hover:border-brand" href="/skills">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="mt-2 text-sm text-gray-400">AI leadership, GenAI/LLMs, MLOps, platforms, product.</p>
        </a>
        <a className="rounded border border-gray-800 p-6 hover:border-brand" href="/education">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="mt-2 text-sm text-gray-400">IMT Ghaziabad (Gold Medalist), University of Delhi.</p>
        </a>
      </section>
      <section id="contact" className="mt-16">
        <h2 className="text-xl font-semibold">Contact</h2>
        <ul className="mt-3 text-sm text-gray-300">
          <li>Email: <a className="underline" href="mailto:jdhinduja@gmail.com">jdhinduja@gmail.com</a></li>
          <li>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/jaideephinduja" target="_blank" rel="noreferrer">@jaideephinduja</a></li>
        </ul>
      </section>
    </main>
  )
}








