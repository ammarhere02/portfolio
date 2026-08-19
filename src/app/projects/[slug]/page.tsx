import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import CaseStudyMedia from '@/components/Projects/CaseStudyMedia'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { wipeX } from '@/lib/motion'
import { getProjectById, projects } from '@/utils/projectData'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectById(params.slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.id}`,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug)
  if (!project) notFound()

  const position = projects.findIndex((p) => p.id === project.id)
  const previous = projects[position - 1]
  const next = projects[position + 1]

  return (
    <>
      <Navigation />
      <main id="main" className="pb-section pt-32">
        <article className="shell">
          <Reveal>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              All work
            </Link>
          </Reveal>

          <header className="mt-10">
            <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-mono text-2xs text-accent">{project.year}</span>
              <span className="label">{project.role}</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display mt-6 max-w-4xl text-5xl">{project.title}</h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-prose text-xl text-fg-muted">{project.summary}</p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  View source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Live site
                </a>
              )}
            </Reveal>

            <Reveal variants={wipeX} delay={0.24} className="rule mt-12" />
          </header>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] lg:gap-20">
            <div className="min-w-0 space-y-16">
              <section>
                <Reveal>
                  <h2 className="label">The problem</h2>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-5 max-w-prose text-lg text-fg-muted">{project.problem}</p>
                </Reveal>
              </section>

              <section>
                <Reveal>
                  <h2 className="label">What I did</h2>
                </Reveal>
                <RevealGroup interval={0.07} as="ol" className="mt-5 space-y-5">
                  {project.approach.map((step, i) => (
                    <RevealItem
                      as="li"
                      key={step}
                      className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3"
                    >
                      <span className="pt-1 font-mono text-2xs text-fg-subtle">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="max-w-prose text-fg-muted">{step}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>

              <section>
                <Reveal>
                  <h2 className="label">Where it landed</h2>
                </Reveal>
                <RevealGroup interval={0.07} as="ul" className="mt-5 space-y-3">
                  {project.outcome.map((item) => (
                    <RevealItem as="li" key={item} className="flex gap-3">
                      <span
                        className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span className="max-w-prose text-fg-muted">{item}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>

              {project.media && project.media.length > 0 && (
                <section>
                  <Reveal>
                    <h2 className="label mb-8">Walkthrough</h2>
                  </Reveal>
                  <CaseStudyMedia items={project.media} />
                </section>
              )}
            </div>

            <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">
              <div>
                <Reveal>
                  <h2 className="label border-b border-line pb-2.5">Stack</h2>
                </Reveal>
                <Reveal delay={0.06} className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <h2 className="label border-b border-line pb-2.5">Built</h2>
                </Reveal>
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-fg-muted">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Reveal>
                  <h2 className="label border-b border-line pb-2.5">Hard parts</h2>
                </Reveal>
                <ul className="mt-4 space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="text-sm text-fg-muted">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <nav
            className="mt-section grid grid-cols-2 gap-6 border-t border-line pt-10"
            aria-label="More projects"
          >
            {previous ? (
              <Link href={`/projects/${previous.id}`} className="group">
                <span className="label">Previous</span>
                <span className="mt-2 flex items-center gap-2 text-base text-fg transition-colors group-hover:text-accent">
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/projects/${next.id}`} className="group text-right">
                <span className="label">Next</span>
                <span className="mt-2 flex items-center justify-end gap-2 text-base text-fg transition-colors group-hover:text-accent">
                  {next.title}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  )
}
