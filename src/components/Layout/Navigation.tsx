'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { duration, ease } from '@/lib/motion'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: highlight whichever section currently owns the upper viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    })
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.slow, ease: ease.out }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out ${
        scrolled
          ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="group flex items-center gap-2.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-sm text-fg transition-colors group-hover:text-accent">
            ammar<span className="text-fg-subtle">.khan</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    transition={{ duration: duration.fast, ease: ease.out }}
                  />
                )}
              </a>
            )
          })}
          <div className="ml-3 h-4 w-px bg-line" aria-hidden="true" />
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-card p-2 text-fg-muted transition-colors hover:text-fg"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: duration.fast, ease: ease.inOut }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <div className="shell flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="border-b border-line py-3 text-sm text-fg-muted last:border-0 hover:text-accent"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
