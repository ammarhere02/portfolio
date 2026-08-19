'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import TypewriterEffect from './TypewriterEffect'
import InteractiveTerminal from './InteractiveTerminal'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'
import { duration, ease, fadeUp, wipeX } from '@/lib/motion'
import { site } from '@/lib/site'

const specialties = [
  'building scalable APIs',
  'designing auth systems',
  'optimising databases',
  'integrating LLMs',
]

const focus = ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'LLM Integration']

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  // Content drifts up and dims slightly as the next section takes over.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="home" ref={ref} className="relative pb-section pt-32 md:pt-40">
      <motion.div className="shell" style={reduced ? undefined : { y, opacity }}>
        <RevealGroup interval={0.09}>
          <RevealItem className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-accent-pulse rounded-full bg-signal" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <p className="label">
              Available for work · {site.locality}, {site.country}
            </p>
          </RevealItem>

          <RevealItem>
            <h1 className="display mt-6 text-6xl">
              {site.name}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-4 font-mono text-xl text-fg-muted">
              <span className="text-accent" aria-hidden="true">
                ${' '}
              </span>
              <TypewriterEffect texts={specialties} className="text-fg" />
            </p>
          </RevealItem>
        </RevealGroup>

        <Reveal variants={wipeX} delay={0.3} className="rule my-12" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <RevealGroup interval={0.08} delay={0.15} className="flex flex-col">
            <RevealItem>
              <p className="max-w-prose text-lg text-fg-muted">
                I&rsquo;m a backend engineer who cares about the parts users never
                see &mdash; the query that stays fast at a million rows, the token
                refresh that never leaks, the API a teammate can read without asking.
              </p>
            </RevealItem>

            <RevealItem className="mt-8 flex flex-wrap gap-2">
              {focus.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </RevealItem>

            <RevealItem className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticLink
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
                }}
              >
                View selected work
                <ArrowDown className="h-4 w-4" />
              </MagneticLink>
              <MagneticLink
                href={`mailto:${site.email}?subject=${encodeURIComponent('Opportunity for Ammar Khan')}`}
                className="btn-secondary"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </MagneticLink>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.35} variants={fadeUp}>
            <InteractiveTerminal />
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="shell mt-20 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: duration.slow, ease: ease.out }}
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: ease.inOut }}
          className="text-fg-subtle"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        <span className="label">Scroll</span>
      </motion.div>
    </section>
  )
}
