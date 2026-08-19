'use client'

import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Runs before paint so the correct class is on <html> from the first frame.
 * Kept in sync with the resolution order below: stored choice, then OS preference.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  } catch (e) {}
})()
`

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  // The init script already applied the class; read it back rather than
  // recomputing, so provider state and the DOM never disagree.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  // Follow the OS while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return
      apply(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const apply = (next: Theme) => {
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.documentElement.style.colorScheme = next
  }

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', next)
    apply(next)
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
