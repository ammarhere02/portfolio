'use client'

import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'
import { wipeX } from '@/lib/motion'
import { site } from '@/lib/site'

const socials = [
  { name: 'GitHub', href: site.github, icon: Github },
  { name: 'LinkedIn', href: site.linkedin, icon: Linkedin },
  { name: 'Email', href: `mailto:${site.email}`, icon: Mail },
]

export default function Footer() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Opportunity for Ammar Khan')}`

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line py-section">
      <div className="shell">
        <Reveal className="flex items-baseline gap-4">
          <span className="font-mono text-2xs text-accent">04</span>
          <span className="label">Contact</span>
        </Reveal>

        <Reveal variants={wipeX} delay={0.1} className="rule mt-4" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
          <RevealGroup interval={0.08}>
            <RevealItem>
              <h2 className="display max-w-2xl text-4xl">
                Hiring, or have a system that needs building?
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-prose text-lg text-fg-muted">
                I&rsquo;m open to backend and full-stack roles, and to focused
                contract work. Tell me what you&rsquo;re building &mdash; I read
                every message.
              </p>
            </RevealItem>
            <RevealItem className="mt-8">
              <MagneticLink href={mailto} className="btn-primary">
                {site.email}
                <ArrowUpRight className="h-4 w-4" />
              </MagneticLink>
            </RevealItem>
          </RevealGroup>

          <RevealGroup interval={0.07} delay={0.15} className="flex flex-col gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <RevealItem key={name}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-3 border-b border-line py-2.5
                             text-sm text-fg-muted transition-colors hover:text-accent lg:min-w-[13rem]"
                >
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                  <ArrowUpRight
                    className="ml-auto h-3.5 w-3.5 transition-transform duration-200
                               group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-2xs text-fg-subtle">
            © {new Date().getFullYear()} {site.name} · {site.locality}, {site.country}
          </p>
          <p className="font-mono text-2xs text-fg-subtle">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
