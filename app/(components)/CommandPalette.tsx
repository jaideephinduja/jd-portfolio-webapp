"use client"
import { useEffect, useMemo, useState } from 'react'
import Fuse from 'fuse.js'

type Item = { title: string, href: string, keywords?: string[] }

const ITEMS: Item[] = [
  { title: 'Home', href: '/' },
  { title: 'Recruiter View', href: '/recruiter', keywords: ['resume', 'print'] },
  { title: 'Experience', href: '/experience', keywords: ['ebay', 'simext', 'zycus'] },
  { title: 'Projects', href: '/projects' },
  { title: 'Skills', href: '/skills' },
  { title: 'Education', href: '/education' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const fuse = useMemo(() => new Fuse(ITEMS, { keys: ['title', 'keywords'], threshold: 0.35 }), [])
  const results = q ? fuse.search(q).map(r => r.item) : ITEMS

  useEffect(() => {
    if (!open) setQ('')
  }, [open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/60 p-4" onClick={() => setOpen(false)}>
      <div className="mx-auto max-w-xl rounded border border-gray-700 bg-[#0b0f1a]" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="w-full border-b border-gray-800 bg-transparent px-4 py-3 outline-none"
        />
        <ul className="max-h-80 overflow-auto py-2">
          {results.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="block px-4 py-2 hover:bg-gray-800">{it.title}</a>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-800 px-4 py-2 text-xs text-gray-400">Press Esc to close • Cmd/Ctrl‑K to toggle</div>
      </div>
    </div>
  )
}








