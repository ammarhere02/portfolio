'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/utils/projectData'
import { RevealItem } from '@/components/motion/Reveal'

/** Compact index row for secondary projects — the whole row opens the case study. */
export default function ProjectRow({ project }: { project: Project }) {
  return (
    <RevealItem as="li">
      <Link
        href={`/projects/${project.id}`}
        className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-6
                   sm:grid-cols-[4rem_minmax(0,1fr)] lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,16rem)]"
      >
        <span className="font-mono text-2xs text-fg-subtle sm:pt-1">{project.year}</span>

        <span className="min-w-0">
          <span className="flex items-center gap-2">
            <span className="text-base font-medium text-fg transition-colors group-hover:text-accent">
              {project.title}
            </span>
            <ArrowUpRight
              className="h-3.5 w-3.5 shrink-0 text-fg-subtle transition-all duration-200
                         group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </span>
          <span className="mt-1.5 block text-sm text-fg-muted">{project.summary}</span>
        </span>

        <span className="hidden justify-end gap-1.5 lg:flex lg:flex-wrap">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </span>
      </Link>
    </RevealItem>
  )
}
