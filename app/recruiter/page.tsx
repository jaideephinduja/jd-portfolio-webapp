export const metadata = {
  title: 'Recruiter View — Jaideep Hinduja'
}

export default function RecruiterView() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-8 print:max-w-none print:px-0">
      <header className="mb-6 border-b border-gray-800 pb-4 print:border-black">
        <h1 className="text-2xl font-bold">Jaideep Hinduja</h1>
        <p className="text-sm text-gray-300 print:text-black">Senior Director/VP — AI & Engineering Leadership</p>
        <p className="text-xs text-gray-400 print:text-black">Mumbai • jdhinduja@gmail.com • +91 98207 96677 • linkedin.com/in/jaideephinduja</p>
      </header>
      <section className="mb-6">
        <h2 className="text-lg font-semibold">Summary</h2>
        <p className="mt-2 text-sm text-gray-300 print:text-black">Senior AI/Engineering leader (ex‑eBay) delivering enterprise GenAI, Conversational AI, and AI platforms at scale. 25 years leading global teams; transformed delivery velocity (+70%), built AI observability and CI/CD for AI, and shipped ROI‑focused initiatives.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold">Core Skills</h2>
        <p className="mt-2 text-sm text-gray-300 print:text-black">AI Strategy & Governance • GenAI/LLMs (RAG, Agents, Prompting) • MLOps/CI‑CD • Platform & Enterprise Architecture • Product/PDLC/Agile • Data & Cloud (AWS) • Java • Python • Node.js</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div className="mt-2">
          <h3 className="text-sm font-semibold">eBay — Engineering Site Leader, Customer Service Technology (Apr 2022 — Mar 2025)</h3>
          <ul className="mt-1 list-disc pl-5 text-sm text-gray-300 print:text-black">
            <li>Led GenAI, RAG, Conversational AI; observability; CI/CD for AI deployments.</li>
            <li>Increased delivery velocity by 70%; received Critical Talent Award (2023).</li>
            <li>Led global engineering across India, U.S., China; cross‑functional collaboration.</li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-semibold">Simext — Co‑Founder, CEO (Apr 2005 — Mar 2022)</h3>
          <ul className="mt-1 list-disc pl-5 text-sm text-gray-300 print:text-black">
            <li>Scaled SCM SaaS (WMS/Logistics/3PL); 95%+ retention; multi‑region clients.</li>
            <li>Enterprise integrations (SAP/Oracle/MS Dynamics); measurable ops improvements.</li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-semibold">Zycus — Global Delivery Head (Jan 2003 — Mar 2005)</h3>
          <ul className="mt-1 list-disc pl-5 text-sm text-gray-300 print:text-black">
            <li>Led Fortune 500 programs in spend management; built delivery standards.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Education</h2>
        <p className="mt-1 text-sm text-gray-300 print:text-black">IMT Ghaziabad — MCA, Gold Medalist • University of Delhi — B.Sc. (Hons) Mathematics</p>
      </section>
    </main>
  )
}








