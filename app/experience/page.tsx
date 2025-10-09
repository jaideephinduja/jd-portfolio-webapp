export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Experience</h1>
      <p className="mt-2 text-sm text-gray-400">Timeline with leadership roles and impact.</p>
      {/* Contentlayer-driven entries will replace this placeholder */}
      <div className="mt-6 space-y-6">
        <div className="rounded border border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">eBay — Engineering Site Leader, Customer Service Technology</h2>
            <span className="text-xs text-gray-400">Apr 2022 — Mar 2025</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            <li>Led GenAI, RAG, Conversational AI; AI observability; CI/CD for AI.</li>
            <li>Increased delivery velocity by 70%; Critical Talent Award (2023).</li>
            <li>Global teams across India, U.S., China; cross-functional leadership.</li>
          </ul>
        </div>
        <div className="rounded border border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Simext — Co‑Founder, CEO</h2>
            <span className="text-xs text-gray-400">Apr 2005 — Mar 2022</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            <li>Scaled SCM SaaS; 95%+ retention; multi‑region clients.</li>
            <li>WMS/Logistics platforms; enterprise integrations (SAP/Oracle/MS Dynamics).</li>
          </ul>
        </div>
        <div className="rounded border border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Zycus — Global Delivery Head (PSO Head)</h2>
            <span className="text-xs text-gray-400">Jan 2003 — Mar 2005</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            <li>Led Fortune 500 programs in spend management and procurement.</li>
            <li>Built leaders and standardized delivery processes.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}








