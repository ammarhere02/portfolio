'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/lib/site'

interface TerminalLine {
  command: string
  output: string[]
  /** Pause after the output lands, before the next command types. */
  delay: number
}

const bootSequence: TerminalLine[] = [
  {
    command: 'whoami',
    output: ['ammar-khan — backend engineer, Lahore PK'],
    delay: 900,
  },
  {
    command: 'cat stack.json',
    output: [
      '{',
      '  "runtime":  ["Node.js", "Express", "NestJS"],',
      '  "data":     ["PostgreSQL", "MongoDB", "Prisma", "Redis"],',
      '  "auth":     ["JWT", "OAuth 2.0", "RBAC"],',
      '  "infra":    ["Docker", "AWS", "nginx", "CI/CD"],',
      '  "ai":       ["LLM integration", "prompt engineering", "RAG"]',
      '}',
    ],
    delay: 2200,
  },
  {
    command: 'git log --oneline -3',
    output: [
      'a3b2c1d  feat: JWT refresh token rotation',
      '9f8e7d6  fix: connection pool exhaustion under load',
      '5c4b3a2  add: per-route API rate limiting',
    ],
    delay: 1800,
  },
]

const HELP_TEXT = [
  'about      — who I am and how I got here',
  'projects   — what I have shipped',
  'contact    — how to reach me',
  'skills     — the stack I work in',
  'social     — github and linkedin',
  'clear      — reset this terminal',
]

export default function InteractiveTerminal() {
  const reduced = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const bootDone = lineIndex >= bootSequence.length

  const scrollTo = useCallback(
    (selector: string) =>
      document
        .querySelector(selector)
        ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }),
    [reduced],
  )

  // Reduced motion: skip the typing animation, show the finished transcript.
  useEffect(() => {
    if (reduced) setLineIndex(bootSequence.length)
  }, [reduced])

  useEffect(() => {
    if (reduced || bootDone) return

    const { command, delay } = bootSequence[lineIndex]

    if (typed.length < command.length) {
      const timer = setTimeout(() => setTyped(command.slice(0, typed.length + 1)), 55)
      return () => clearTimeout(timer)
    }

    if (!showOutput) {
      const timer = setTimeout(() => setShowOutput(true), 320)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setLineIndex((prev) => prev + 1)
      setTyped('')
      setShowOutput(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [lineIndex, typed, showOutput, bootDone, reduced])

  useEffect(() => {
    const node = scrollRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [lineIndex, showOutput, history])

  const runCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase()
    let output: string[]

    switch (cmd) {
      case 'help':
        output = HELP_TEXT
        break
      case 'about':
        output = ['Opening about…']
        setTimeout(() => scrollTo('#about'), 400)
        break
      case 'projects':
      case 'work':
        output = ['Opening work…']
        setTimeout(() => scrollTo('#projects'), 400)
        break
      case 'contact':
        output = [`Reach me at ${site.email}`]
        setTimeout(() => scrollTo('#contact'), 400)
        break
      case 'skills':
        output = ['Run `cat stack.json` above, or scroll to the About section.']
        break
      case 'social':
        output = [site.github, site.linkedin]
        break
      case 'ls':
        output = ['about/  projects/  contact/  stack.json  README.md']
        break
      case 'clear':
        setHistory([])
        return
      case '':
        return
      default:
        output = [`zsh: command not found: ${raw.trim()} — try \`help\``]
    }

    setHistory((prev) => [...prev, { command: raw.trim(), output }])
  }, [scrollTo])

  const Prompt = () => (
    <span className="shrink-0 select-none">
      <span className="text-accent-300">ammar</span>
      <span className="text-ink-500">@</span>
      <span className="text-ink-300">portfolio</span>
      <span className="text-ink-500"> ~ $ </span>
    </span>
  )

  const renderOutput = (lines: string[], key: string) =>
    lines.map((line, i) => (
      <motion.div
        key={`${key}-${i}`}
        initial={reduced ? false : { opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduced ? 0 : i * 0.045, duration: 0.28 }}
        className="whitespace-pre-wrap break-words text-ink-300"
      >
        {line}
      </motion.div>
    ))

  return (
    <div className="overflow-hidden rounded-card border border-line bg-ink-950 shadow-xl shadow-black/5 dark:shadow-black/40">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-2xs uppercase tracking-label text-ink-500">
          ammar@portfolio — zsh
        </span>
        <span className="w-12" aria-hidden="true" />
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-[22rem] space-y-2 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
      >
        {bootSequence.slice(0, lineIndex).map((line, i) => (
          <div key={`done-${i}`} className="space-y-1">
            <div className="flex flex-wrap">
              <Prompt />
              <span className="text-ink-50">{line.command}</span>
            </div>
            {renderOutput(line.output, `done-${i}`)}
          </div>
        ))}

        {!bootDone && (
          <div className="space-y-1">
            <div className="flex flex-wrap">
              <Prompt />
              <span className="text-ink-50">{typed}</span>
              {!showOutput && <span className="ml-0.5 animate-blink text-accent-400">▌</span>}
            </div>
            {showOutput && renderOutput(bootSequence[lineIndex].output, `active-${lineIndex}`)}
          </div>
        )}

        {history.map((entry, i) => (
          <div key={`hist-${i}`} className="space-y-1">
            <div className="flex flex-wrap">
              <Prompt />
              <span className="text-ink-50">{entry.command}</span>
            </div>
            {renderOutput(entry.output, `hist-${i}`)}
          </div>
        ))}

        {bootDone && (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              runCommand(input)
              setInput('')
            }}
            className="flex flex-wrap items-center"
          >
            <label htmlFor="terminal-input" className="sr-only">
              Terminal command — type help to see options
            </label>
            <Prompt />
            <input
              id="terminal-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              placeholder="type `help`"
              className="min-w-0 flex-1 bg-transparent text-ink-50 caret-accent-400
                         outline-none placeholder:text-ink-600"
            />
          </form>
        )}
      </div>
    </div>
  )
}
