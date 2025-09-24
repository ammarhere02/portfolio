'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Database, Server, Shield } from 'lucide-react'
import TypewriterEffect from './TypewriterEffect'
import InteractiveTerminal from './InteractiveTerminal'

export default function HeroSection() {
  const specialties = [
    'Full Stack Developer',
    'Software Architect',
    'AI Integration Specialist',
    'API Architect',
    'Database Designer',
    'DevOps Enthusiast'
  ]

  const techStack = [
    { name: 'Node.js', icon: Server },
    { name: 'API Design', icon: Code },
    { name: 'Databases', icon: Database },
    { name: 'Security', icon: Shield },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-blue-50/20 dark:from-primary-900/5 dark:via-transparent dark:to-blue-900/5"></div>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary-900 dark:text-secondary-100">
                Hi, I'm{' '}
                <span className="text-gradient">Ammar Khan</span>
              </h1>

              <div className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 terminal-font">
                <span className="text-primary-600 dark:text-primary-400">$</span>{' '}
                <TypewriterEffect
                  texts={specialties}
                  className="text-secondary-800 dark:text-secondary-200"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
              Specialized in building scalable backend systems, secure APIs, and integrating AI solutions.
              Based in <span className="font-semibold text-secondary-800 dark:text-secondary-100">Lahore, Pakistan</span>.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {techStack.map((tech) => {
                const Icon = tech.icon
                return (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium text-sm">{tech.name}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary hover:shadow-lg transition-shadow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary hover:shadow-md transition-shadow"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="card p-0 overflow-hidden">
              <InteractiveTerminal />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center w-8 h-8 text-secondary-400 dark:text-secondary-600">
            <ArrowDown className="w-6 h-6" />
          </div>
          <p className="text-sm text-secondary-500 dark:text-secondary-500 mt-2">
            Scroll to explore my work
          </p>
        </div>
      </div>
    </section>
  )
}