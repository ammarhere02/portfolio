export const site = {
  name: 'Ammar Khan',
  role: 'Backend Engineer & Systems Architect',
  tagline:
    'I build scalable backend systems, secure APIs, and AI-integrated applications.',
  description:
    'Backend engineer specialising in Node.js APIs, authentication systems, database architecture, and LLM integration. Based in Lahore, Pakistan.',
  url: 'https://portfolio-delta-pied-12.vercel.app',
  locality: 'Lahore',
  region: 'Punjab',
  country: 'Pakistan',
  email: 'ammarkhancloud@icloud.com',
  github: 'https://github.com/ammarhere02',
  linkedin: 'https://www.linkedin.com/in/ammar-khan-7b656822a',
  /** Null hides the download button; set a path to show it. */
  resumeUrl: '/ammar-khan-resume.pdf' as string | null,
} as const

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  knowsAbout: [
    'Node.js',
    'TypeScript',
    'API Design',
    'PostgreSQL',
    'Authentication & Authorization',
    'LLM Integration',
    'Docker',
    'AWS',
  ],
}
