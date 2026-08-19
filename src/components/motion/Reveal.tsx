'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/motion'

interface RevealProps {
  children?: React.ReactNode
  className?: string
  /** Seconds to wait before this element animates in. */
  delay?: number
  variants?: Variants
  as?: 'div' | 'section' | 'header' | 'li' | 'article' | 'span' | 'figure'
}

/**
 * Scroll-triggered reveal. When the visitor prefers reduced motion the element
 * renders in its final state with no transform, rather than not rendering.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) return <Component className={className}>{children}</Component>

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

interface RevealGroupProps {
  children?: React.ReactNode
  className?: string
  /** Gap in seconds between each child's entrance. */
  interval?: number
  delay?: number
  as?: 'div' | 'section' | 'ul' | 'ol'
}

/** Parent that staggers any `RevealItem` descendants. */
export function RevealGroup({
  children,
  className,
  interval = 0.07,
  delay = 0,
  as = 'div',
}: RevealGroupProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) return <Component className={className}>{children}</Component>

  return (
    <Component
      className={className}
      variants={stagger(interval, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Component>
  )
}

interface RevealItemProps {
  children?: React.ReactNode
  className?: string
  variants?: Variants
  as?: 'div' | 'li' | 'article' | 'span'
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = 'div',
}: RevealItemProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) return <Component className={className}>{children}</Component>

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
