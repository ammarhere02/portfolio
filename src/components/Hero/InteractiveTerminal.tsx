'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Circle } from 'lucide-react'

interface TerminalLine {
  command?: string
  output?: string[]
  delay?: number
}

export default function InteractiveTerminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCommandText, setCurrentCommandText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const terminalSequence: TerminalLine[] = [
    {
      command: 'whoami',
      output: ['ammar-khan'],
      delay: 1000
    },
    {
      command: 'ls -la ~/projects',
      output: [
        'drwxr-xr-x  8 ammar  staff   256 Sep  6 2024 movie-booking-app',
        'drwxr-xr-x  6 ammar  staff   192 Aug 15 2024 auth-service-api',
        'drwxr-xr-x  4 ammar  staff   128 Jul 20 2024 inventory-system',
        'drwxr-xr-x  5 ammar  staff   160 Jun 10 2024 docker-microservices'
      ],
      delay: 2000
    },
    {
      command: 'cat skills.json',
      output: [
        '{',
        '  "backend": ["Node.js", "Express", "NestJS"],',
        '  "database": ["PostgreSQL", "MongoDB", "Prisma"],',
        '  "auth": ["JWT", "OAuth", "RBAC"],',
        '  "devops": ["Docker", "AWS", "CI/CD"],',
        '  "tools": ["Git", "Postman", "VS Code"]',
        '}'
      ],
      delay: 2500
    },
    {
      command: 'git log --oneline -3',
      output: [
        'a3b2c1d feat: implement JWT refresh token rotation',
        '9f8e7d6 fix: resolve database connection pooling issue',
        '5c4b3a2 add: comprehensive API rate limiting'
      ],
      delay: 2000
    }
  ]

  useEffect(() => {
    if (currentLineIndex >= terminalSequence.length) return

    const currentLine = terminalSequence[currentLineIndex]
    const command = currentLine.command || ''
    
    if (!isTyping) {
      setIsTyping(true)
      setCurrentCommandText('')
      setShowOutput(false)
    }

    let charIndex = currentCommandText.length
    
    if (charIndex < command.length) {
      const timer = setTimeout(() => {
        setCurrentCommandText(command.substring(0, charIndex + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      if (!showOutput) {
        const timer = setTimeout(() => {
          setShowOutput(true)
          setIsTyping(false)
        }, 500)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1)
        }, currentLine.delay)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLineIndex, currentCommandText, showOutput, isTyping])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [currentLineIndex, showOutput])

  const resetAnimation = () => {
    setCurrentLineIndex(0)
    setCurrentCommandText('')
    setShowOutput(false)
    setIsTyping(false)
  }

  useEffect(() => {
    if (currentLineIndex >= terminalSequence.length) {
      const resetTimer = setTimeout(resetAnimation, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentLineIndex])

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Circle className="w-3 h-3 text-red-500 fill-current" />
          <Circle className="w-3 h-3 text-yellow-500 fill-current" />
          <Circle className="w-3 h-3 text-green-500 fill-current" />
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Terminal className="w-4 h-4" />
          <span>zsh</span>
        </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="h-80 p-4 overflow-y-auto text-sm terminal-font bg-gray-900 text-green-400"
      >
        <div className="space-y-2">
          {terminalSequence.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">ammar@macbook</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-white">{line.command}</span>
              </div>
              <AnimatePresence>
                {line.output && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 pl-4"
                  >
                    {line.output.map((outputLine, outputIndex) => (
                      <motion.div
                        key={outputIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: outputIndex * 0.1 }}
                        className="text-gray-300"
                      >
                        {outputLine}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {currentLineIndex < terminalSequence.length && (
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">ammar@macbook</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-white">
                  {currentCommandText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-green-400"
                    >
                      _
                    </motion.span>
                  )}
                </span>
              </div>
              
              <AnimatePresence>
                {showOutput && terminalSequence[currentLineIndex].output && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1 pl-4"
                  >
                    {terminalSequence[currentLineIndex].output!.map((outputLine, outputIndex) => (
                      <motion.div
                        key={outputIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: outputIndex * 0.1 }}
                        className="text-gray-300"
                      >
                        {outputLine}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}