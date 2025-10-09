import './globals.css'
import type { Metadata } from 'next'
import { PersonSchema } from './(components)/Schema'

export const metadata: Metadata = {
  title: 'Jaideep Hinduja — AI & Engineering Leader',
  description: 'Senior AI/Engineering leader (ex‑eBay) driving enterprise‑scale GenAI, Conversational AI, and AI platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <PersonSchema />
        {children}
        <div id="cmdk-root" />
      </body>
    </html>
  )
}


