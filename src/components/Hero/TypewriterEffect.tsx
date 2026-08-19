'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function TypewriterEffect({
  texts,
  typingSpeed = 65,
  deletingSpeed = 32,
  pauseDuration = 1800,
  className = '',
}: TypewriterEffectProps) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return

    const full = texts[index]
    const atEnd = text === full
    const atStart = text === ''

    // Pausing at the end of a word is its own timer, so the caret keeps
    // blinking instead of the whole loop stalling.
    const delay = atEnd && !isDeleting ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (atEnd) setIsDeleting(true)
        else setText(full.slice(0, text.length + 1))
      } else {
        if (atStart) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        } else {
          setText(full.slice(0, text.length - 1))
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, index, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration, reduced])

  // Screen readers get the full list once; the animation itself is decorative.
  if (reduced) {
    return <span className={className}>{texts[0]}</span>
  }

  return (
    <>
      <span className={className} aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-[0.5ch] animate-blink bg-accent align-baseline text-transparent">
          _
        </span>
      </span>
      <span className="sr-only">{texts.join(', ')}</span>
    </>
  )
}
