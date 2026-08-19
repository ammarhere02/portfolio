'use client'

import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
import SectionHeader from '@/components/Layout/SectionHeader'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'
import { certifications, education, engagements } from '@/lib/experience'
import { site } from '@/lib/site'

export default function ExperienceSection() {
  // Nothing verified yet means nothing to show — better than an empty shell.
  if (engagements.length === 0 && education.length === 0 && certifications.length === 0)
    return null

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-section">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Experience"
          title="Where I've done the work."
        />

        {engagements.length > 0 && (
          <RevealGroup interval={0.08} as="ol" className="space-y-12">
            {engagements.map((item) => (
              <RevealItem
                as="li"
                key={`${item.organisation}-${item.period}`}
                className="grid grid-cols-1 gap-4 border-b border-line pb-12 last:border-0
                           md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-12"
              >
                <div>
                  <p className="font-mono text-2xs text-accent">{item.period}</p>
                  <p className="mt-2 text-sm text-fg-subtle">
                    {item.type}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-fg">{item.role}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{item.organisation}</p>
                  <p className="mt-4 max-w-prose text-fg-muted">{item.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-fg-muted">
                        <span
                          className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {item.relatedProject && (
                    <Link
                      href={`/projects/${item.relatedProject}`}
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm text-accent"
                    >
                      Read the case study
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-200
                                   group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {education.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="label border-b border-line pb-3">Education</h3>
            </Reveal>
            <RevealGroup interval={0.07} as="ul">
              {education.map((item) => (
                <RevealItem
                  as="li"
                  key={`${item.institution}-${item.period}`}
                  className="grid grid-cols-1 gap-2 border-b border-line py-5
                             md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-12"
                >
                  <span className="font-mono text-2xs text-fg-subtle">{item.period}</span>
                  <span>
                    <span className="block text-base text-fg">{item.qualification}</span>
                    <span className="mt-1 block text-sm text-fg-muted">
                      {item.institution}
                      {item.location ? ` · ${item.location}` : ''}
                    </span>
                    {item.detail && (
                      <span className="mt-1 block text-sm text-fg-subtle">{item.detail}</span>
                    )}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="label border-b border-line pb-3">Certifications</h3>
            </Reveal>
            <RevealGroup interval={0.07} as="ul">
              {certifications.map((item) => (
                <RevealItem
                  as="li"
                  key={item.name}
                  className="grid grid-cols-1 gap-2 border-b border-line py-5
                             md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-12"
                >
                  <span className="font-mono text-2xs text-fg-subtle">{item.date}</span>
                  <span>
                    <span className="block text-base text-fg">{item.name}</span>
                    <span className="mt-1 block text-sm text-fg-muted">{item.issuer}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}

        {site.resumeUrl && (
          <Reveal className="mt-16">
            <MagneticLink href={site.resumeUrl} className="btn-secondary" external>
              Download résumé
              <Download className="h-4 w-4" />
            </MagneticLink>
          </Reveal>
        )}
      </div>
    </section>
  )
}
