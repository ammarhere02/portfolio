'use client'

import SectionHeader from '@/components/Layout/SectionHeader'
import SkillsGrid from './SkillsGrid'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'

const journey = [
  {
    year: '2022',
    title: 'Frontend first',
    description:
      'React, HTML, CSS. Built responsive interfaces and learned how the browser actually renders what I wrote.',
  },
  {
    year: '2023',
    title: 'Crossing to the server',
    description:
      'Node.js and Express. First real APIs, first schema I regretted, first time I understood why indexes matter.',
  },
  {
    year: '2024',
    title: 'Backend by choice',
    description:
      'Scalable services, authentication flows, query optimisation, containers and deploys. Backend stopped being the other half and became the work.',
  },
  {
    year: '2025',
    title: 'AI integration',
    description:
      'LLM-backed features, prompt engineering, retrieval pipelines — and the architecture decisions that keep them affordable.',
  },
]

const principles = [
  {
    title: 'Readable beats clever',
    description:
      'Code is read far more often than it is written. I optimise for the person debugging it at 2am.',
  },
  {
    title: 'Security is structural',
    description:
      'Auth, validation, and least privilege belong in the design, not in a hardening pass before launch.',
  },
  {
    title: 'Measure, then optimise',
    description:
      'I profile before I rewrite. Most performance problems are one query or one missing index.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-section">
      <div className="shell">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              I got into backend by following the{' '}
              <em className="italic text-accent">interesting</em> problems.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
          <RevealGroup interval={0.08} className="space-y-6 text-fg-muted">
            <RevealItem>
              <p>
                I started because I wanted to know how websites worked. I stayed because
                of what sits behind them &mdash; the APIs, the schemas, the auth flows,
                the systems that quietly decide whether a product feels fast or broken.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                These days I build backends in Node.js and TypeScript: designing
                REST APIs teams can actually navigate, securing them properly, and
                keeping database queries honest as the data grows. Most recently
                I&rsquo;ve been working on LLM-backed features and the retrieval
                plumbing that makes them useful rather than impressive.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                I&rsquo;m based in Lahore and I work well with distributed teams. If
                you have a system that needs to hold up under real traffic, that&rsquo;s
                the kind of problem I want.
              </p>
            </RevealItem>
          </RevealGroup>

          <div>
            <Reveal>
              <h3 className="label mb-8">The path here</h3>
            </Reveal>

            <RevealGroup interval={0.09} as="ol" className="relative">
              <span
                className="absolute bottom-2 left-[3.25rem] top-2 w-px bg-line"
                aria-hidden="true"
              />
              {journey.map((phase) => (
                <RevealItem
                  as="li"
                  key={phase.year}
                  className="relative grid grid-cols-[3.25rem_1fr] gap-6 pb-10 last:pb-0"
                >
                  <span className="pt-0.5 font-mono text-xs text-accent">{phase.year}</span>
                  <div className="relative pl-6">
                    <span
                      className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-accent
                                 ring-4 ring-canvas"
                      aria-hidden="true"
                    />
                    <h4 className="text-base font-medium text-fg">{phase.title}</h4>
                    <p className="mt-1.5 text-sm text-fg-muted">{phase.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <Reveal className="rule mt-20" />

        <RevealGroup
          interval={0.08}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {principles.map((principle, i) => (
            <RevealItem key={principle.title}>
              <span className="font-mono text-2xs text-fg-subtle">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-3 text-base font-medium text-fg">{principle.title}</h4>
              <p className="mt-2 text-sm text-fg-muted">{principle.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <SkillsGrid />
      </div>
    </section>
  )
}
