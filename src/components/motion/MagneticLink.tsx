'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

interface MagneticLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  /** Maximum pixels the element drifts toward the cursor. */
  strength?: number
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

/**
 * Anchor that drifts slightly toward the cursor. Pointer tracking is skipped
 * entirely for reduced-motion users and never runs on touch (no hover).
 */
export default function MagneticLink({
  href,
  children,
  className,
  strength = 6,
  external = false,
  onClick,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 })

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={reduced ? undefined : { x: springX, y: springY }}
      {...externalProps}
    >
      {children}
    </motion.a>
  )
}
