export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-sm text-gray-400">Flagship initiatives and case studies (architecture diagrams coming).</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded border border-gray-800 p-6">
          <h2 className="text-lg font-semibold">Contact Center GenAI Platform</h2>
          <p className="mt-2 text-sm text-gray-300">RAG & Conversational AI improving CX; observability & on‑demand CI/CD.</p>
        </div>
        <div className="rounded border border-gray-800 p-6">
          <h2 className="text-lg font-semibold">SCM SaaS Suite</h2>
          <p className="mt-2 text-sm text-gray-300">WMS/Logistics/3PL with enterprise integrations; 36% faster ops; 99%+ accuracy.</p>
        </div>
      </div>
    </main>
  )
}








