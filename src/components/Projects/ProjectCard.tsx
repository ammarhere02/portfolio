'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { getProjectCover, type Project } from '@/utils/projectData'
import { RevealItem } from '@/components/motion/Reveal'
import { duration, ease } from '@/lib/motion'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon
  const reduced = useReducedMotion()
  const cover = getProjectCover(project)

  return (
    <RevealItem as="article" className="group h-full">
      <motion.div
        whileHover={reduced ? undefined : { y: -4 }}
        transition={{ duration: duration.fast, ease: ease.out }}
        className="relative flex h-full flex-col overflow-hidden rounded-card border border-line
                   bg-surface transition-colors duration-300 group-hover:border-line-strong"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface-2">
          {cover ? (
            <Image
              src={cover}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover object-top transition-transform duration-700 ease-out
                         group-hover:scale-[1.03]"
            />
          ) : (
            <span className="flex h-full items-center justify-center">
              <Icon className="h-9 w-9 text-fg-subtle" />
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-2xs text-fg-subtle">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-2xs text-fg-subtle">{project.year}</span>
          </div>

          <h3 className="mt-3 text-xl font-medium text-fg">
            {/* The heading link is the real target; the cover above just decorates it. */}
            <Link
              href={`/projects/${project.id}`}
              className="transition-colors after:absolute after:inset-0 hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-fg-muted">{project.summary}</p>

          {project.outcome.length > 0 && (
            <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-fg">
              {project.outcome[0]}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="tag border-transparent bg-transparent">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-5 pt-6">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-accent"
            >
              Read case study
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200
                           group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </RevealItem>
  )
}
