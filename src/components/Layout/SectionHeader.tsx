'use client'

import { Reveal } from '@/components/motion/Reveal'
import { wipeX } from '@/lib/motion'

interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01". */
  index: string
  label: string
  title: React.ReactNode
  intro?: string
}

export default function SectionHeader({ index, label, title, intro }: SectionHeaderProps) {
  return (
    <header className="mb-16 md:mb-20">
      <Reveal className="flex items-baseline gap-4">
        <span className="font-mono text-2xs text-accent">{index}</span>
        <span className="label">{label}</span>
      </Reveal>

      <Reveal variants={wipeX} delay={0.1} className="rule mt-4" />

      <Reveal delay={0.15}>
        <h2 className="display mt-8 max-w-3xl text-4xl">{title}</h2>
      </Reveal>

      {intro && (
        <Reveal delay={0.22}>
          <p className="mt-6 max-w-prose text-lg text-fg-muted">{intro}</p>
        </Reveal>
      )}
    </header>
  )
}
