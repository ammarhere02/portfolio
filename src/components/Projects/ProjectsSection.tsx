'use client'

import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '@/components/Layout/SectionHeader'
import ProjectCard from './ProjectCard'
import ProjectRow from './ProjectRow'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'
import { getProjectsByCategory } from '@/utils/projectData'
import { site } from '@/lib/site'

export default function ProjectsSection() {
  const [lead, ...rest] = getProjectsByCategory('featured')
  const recent = getProjectsByCategory('recent')
  const learning = getProjectsByCategory('learning')

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-section">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Selected work"
          title="Things I built, and what they taught me."
          intro="Each of these solved a real problem for someone. The ones with the most space were the hardest to build."
        />

        {/* The lead project runs full width; the rest sit two-up beneath it. */}
        <RevealGroup interval={0.08} className="space-y-6">
          {lead && <ProjectCard project={lead} index={0} wide />}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 1} />
              ))}
            </div>
          )}
        </RevealGroup>

        {/* Everything else: a scannable index rather than more identical cards */}
        <div className="mt-24">
          <Reveal className="flex items-baseline justify-between border-b border-line pb-4">
            <h3 className="label">Also built</h3>
            <span className="font-mono text-2xs text-fg-subtle">
              {String(recent.length).padStart(2, '0')}
            </span>
          </Reveal>

          <RevealGroup interval={0.06} as="ul">
            {recent.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </RevealGroup>
        </div>

        {learning.length > 0 && (
          <RevealGroup interval={0.07} className="mt-20 max-w-prose">
            {learning.map((project) => (
              <RevealItem key={project.id}>
                <h3 className="label">Before all that</h3>
                <p className="mt-4 text-fg-muted">{project.summary}</p>
                <p className="mt-3 font-mono text-2xs text-fg-subtle">{project.year}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        <Reveal className="mt-24 flex flex-col items-start gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-fg-muted">
            More code, smaller experiments, and the occasional open-source fix live
            on GitHub.
          </p>
          <MagneticLink href={site.github} external className="btn-secondary shrink-0">
            Browse GitHub
            <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  )
}
