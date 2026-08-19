'use client'

import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'

interface ProjectThumbnailProps {
  src?: string
  /** Fallback mark when a project has no media yet. */
  icon: LucideIcon
  sizes: string
  priority?: boolean
  /** Diagrams and posters are not web pages — show them whole, unframed. */
  fit?: 'window' | 'contain'
}

/**
 * Screenshots are wide and detailed; dropped straight into a card they either
 * shrink to nothing or get cropped mid-word. Framing them in a browser window
 * that bleeds off the bottom edge keeps the crop deliberate and the UI legible.
 */
export default function ProjectThumbnail({
  src,
  icon: Icon,
  sizes,
  priority = false,
  fit = 'window',
}: ProjectThumbnailProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Tinted ground so the framed window has something to sit on */}
      <div className="absolute inset-0 bg-surface-2" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/[0.14] via-transparent to-accent/[0.06]"
        aria-hidden="true"
      />

      {src && fit === 'contain' ? (
        /* Diagrams are flattened onto white, so they sit on their own plate
           and stay legible whichever theme is active. */
        <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8">
          <div
            className="relative h-full w-full overflow-hidden rounded-lg bg-white p-3
                       shadow-xl shadow-black/10 ring-1 ring-black/5
                       transition-transform duration-700 ease-out
                       group-hover:-translate-y-1 dark:shadow-black/40"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain object-center p-2"
            />
          </div>
        </div>
      ) : src ? (
        <div
          className="absolute inset-x-[7%] top-[9%] overflow-hidden rounded-t-lg border
                     border-line-strong/60 bg-surface shadow-2xl shadow-black/20
                     transition-transform duration-700 ease-out
                     group-hover:-translate-y-1.5 dark:shadow-black/50"
          style={{ bottom: 0 }}
        >
          <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface-2 px-3">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-2 h-2.5 flex-1 rounded-full bg-line" />
          </div>
          <div className="relative h-[calc(100%-1.75rem)]">
            <Image
              src={src}
              alt=""
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover object-top"
            />
          </div>
        </div>
      ) : (
        <span className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-9 w-9 text-fg-subtle" />
        </span>
      )}
    </div>
  )
}
