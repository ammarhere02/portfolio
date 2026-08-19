'use client'

import Image from 'next/image'
import type { MediaItem } from '@/utils/projectData'
import { Reveal } from '@/components/motion/Reveal'

/**
 * Inline media for a case study page. Videos are muted, looping, and
 * controllable — they autoplay only when the browser allows a muted play,
 * and never block the page if they fail.
 */
export default function CaseStudyMedia({ items }: { items: MediaItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="space-y-12">
      {items.map((item, i) => (
        <Reveal key={item.src} as="figure" delay={i === 0 ? 0 : 0.05}>
          <div className="overflow-hidden rounded-card border border-line bg-surface-2">
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                muted
                loop
                playsInline
                preload="metadata"
                className="block w-full"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                width={1600}
                height={1015}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="block h-auto w-full"
                /* The first frame is likely above the fold on this page. */
                priority={i === 0}
              />
            )}
          </div>
          <figcaption className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-mono text-2xs text-fg-subtle">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-sm text-fg">{item.title}</span>
            {item.description && (
              <span className="text-sm text-fg-muted sm:border-l sm:border-line sm:pl-3">
                {item.description}
              </span>
            )}
          </figcaption>
        </Reveal>
      ))}
    </div>
  )
}
