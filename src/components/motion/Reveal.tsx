'use client'

import { motion, type Variants } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/motion'

/**
 * These render identically on the server and on the first client render —
 * no branching on `useReducedMotion`, which would change the DOM between the
 * two and break hydration. Reduced motion is handled globally by the
 * `MotionConfig reducedMotion="user"` wrapper in ThemeProvider, plus the
 * transition override in globals.css.
 */

type Tag = 'div' | 'section' | 'header' | 'li' | 'article' | 'span' | 'figure'

interface RevealProps {
  children?: React.ReactNode
  className?: string
  /** Seconds to wait before this element animates in. */
  delay?: number
  variants?: Variants
  as?: Tag
}

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = 'div',
}: RevealProps) {
  const Component = motion[as]

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
  const Component = motion[as]

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
  const Component = motion[as]

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
