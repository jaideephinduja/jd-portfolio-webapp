import { allSkillsCollections, allSkills } from 'contentlayer/generated'

type SkillCategory = { title: string; items: string[] }

export default function SkillsPage() {
  const consolidated = allSkillsCollections?.[0]
  const categories: SkillCategory[] = consolidated
    ? consolidated.categories.map((c: { category: string; items: string[] }) => ({ title: c.category, items: c.items }))
    : allSkills.map((s) => ({ title: s.category, items: s.items }))

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((cat: SkillCategory) => (
          <div key={cat.title} className="rounded border border-gray-800 p-6">
            <h2 className="text-lg font-semibold">{cat.title}</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-gray-300">
              {cat.items.map((i) => (
                <li key={i} className="rounded border border-gray-700 px-2 py-1">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}


