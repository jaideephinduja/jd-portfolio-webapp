import { NextSeo } from 'next-seo'

export default function SEO() {
  return (
    <NextSeo
      title="Jaideep Hinduja — AI & Engineering Leader"
      description="Senior AI/Engineering leader (ex‑eBay) driving enterprise‑scale GenAI, Conversational AI, and AI platforms."
      openGraph={{
        type: 'website',
        url: 'https://www.example.com',
        title: 'Jaideep Hinduja — AI & Engineering Leader',
        description: 'Senior AI/Engineering leader (ex‑eBay) driving enterprise‑scale GenAI, Conversational AI, and AI platforms.',
        images: [
          { url: 'https://www.example.com/og.png', width: 1200, height: 630, alt: 'Jaideep Hinduja' }
        ]
      }}
      twitter={{ cardType: 'summary_large_image' }}
    />
  )
}








