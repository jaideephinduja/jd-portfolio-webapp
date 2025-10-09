export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaideep Hinduja',
    url: 'https://www.example.com',
    jobTitle: 'Senior Director / VP, AI & Engineering',
    sameAs: [
      'https://www.linkedin.com/in/jaideephinduja'
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}








