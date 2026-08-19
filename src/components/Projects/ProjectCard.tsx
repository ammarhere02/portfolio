'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { getProjectCover, type Project } from '@/utils/projectData'
import ProjectThumbnail from './ProjectThumbnail'
import { RevealItem } from '@/components/motion/Reveal'
import { duration, ease } from '@/lib/motion'

interface ProjectCardProps {
  project: Project
  index: number
  /** Lead treatment: full width, cover beside the copy instead of above it. */
  wide?: boolean
}

export default function ProjectCard({ project, index, wide = false }: ProjectCardProps) {
  const Icon = project.icon
  const cover = getProjectCover(project)

  return (
    <RevealItem as="article" className="group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: duration.fast, ease: ease.out }}
        className={`relative flex h-full overflow-hidden rounded-card border border-line
                    bg-surface transition-colors duration-300 group-hover:border-line-strong ${
                      wide ? 'flex-col lg:flex-row' : 'flex-col'
                    }`}
      >
        <div
          className={`relative overflow-hidden ${
            wide
              ? 'aspect-[16/10] border-b border-line lg:aspect-auto lg:w-[56%] lg:border-b-0 lg:border-r'
              : 'aspect-[16/10] border-b border-line'
          }`}
        >
          <ProjectThumbnail
            src={cover}
            icon={Icon}
            fit={project.coverFit}
            sizes={wide ? '(max-width: 1024px) 100vw, 700px' : '(max-width: 768px) 100vw, 580px'}
            priority={wide}
          />
        </div>

        <div className={`flex flex-1 flex-col ${wide ? 'p-7 lg:p-10' : 'p-6'}`}>
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-2xs text-fg-subtle">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-2xs text-fg-subtle">{project.year}</span>
          </div>

          <h3 className={`mt-5 font-medium text-fg ${wide ? 'text-3xl' : 'text-xl'}`}>
            {/* The heading link is the real target; the cover above just decorates it. */}
            <Link
              href={`/projects/${project.id}`}
              className="transition-colors after:absolute after:inset-0 hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className={`mt-4 max-w-prose text-fg-muted ${wide ? 'text-base' : 'text-sm'}`}>
            {project.summary}
          </p>

          {project.outcome.length > 0 && (
            <p className="mt-7 border-l-2 border-accent pl-4 text-sm text-fg">
              {project.outcome[0]}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, wide ? 6 : 4).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > (wide ? 6 : 4) && (
              <span className="tag border-transparent bg-transparent">
                +{project.technologies.length - (wide ? 6 : 4)}
              </span>
            )}
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-5 pt-8">
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
