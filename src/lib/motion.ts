import type { Variants } from 'framer-motion'

type Bezier = [number, number, number, number]

/** Single source of truth for easing — mirrors the Tailwind timing functions. */
export const ease = {
  out: [0.16, 1, 0.3, 1] as Bezier,
  inOut: [0.65, 0, 0.35, 1] as Bezier,
}

export const duration = {
  fast: 0.24,
  base: 0.52,
  slow: 0.82,
}

/** Viewport config shared by every scroll reveal, so thresholds stay consistent. */
export const viewport = { once: true, margin: '-12% 0px -12% 0px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.slow, ease: ease.out } },
}

/** Horizontal wipe used for section rules and underlines. */
export const wipeX: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { duration: duration.slow, ease: ease.out },
  },
}

export const stagger = (children = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: children, delayChildren: delay },
  },
})
