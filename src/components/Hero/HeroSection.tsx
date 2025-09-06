'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Database, Server, Shield } from 'lucide-react'
import TypewriterEffect from './TypewriterEffect'
import InteractiveTerminal from './InteractiveTerminal'

export default function HeroSection() {
  const specialties = [
    'Backend Developer',
    'API Architect',
    'Database Designer',
    'Security Engineer',
    'DevOps Enthusiast'
  ]

  const techStack = [
    { name: 'Node.js', icon: Server },
    { name: 'API Design', icon: Code },
    { name: 'Databases', icon: Database },
    { name: 'Security', icon: Shield },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi there,{' '}
                <br />
                <span className="text-gradient">I'm Ammar</span>
              </motion.h1>
              
              <motion.div 
                className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 terminal-font"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-primary-600 dark:text-primary-400">$</span>{' '}
                <TypewriterEffect 
                  texts={specialties}
                  className="text-secondary-800 dark:text-secondary-200"
                />
              </motion.div>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              I'm a passionate backend developer and full-stack engineer based in{' '}
              <span className="font-semibold text-secondary-800 dark:text-secondary-100">San Francisco</span>.
              I specialize in building robust, scalable APIs and secure authentication systems that power modern applications.
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Over my development journey, I've mastered the art of turning complex business logic into clean, 
              maintainable code. From Node.js microservices to comprehensive database architectures, 
              I love solving challenging problems and building systems that just work.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {techStack.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-800 rounded-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">{tech.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <button className="btn-primary">
                View My Projects
              </button>
              <button className="btn-secondary">
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="card p-0 overflow-hidden">
              <InteractiveTerminal />
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-8 h-8 text-secondary-400 dark:text-secondary-600"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
          <p className="text-sm text-secondary-500 dark:text-secondary-500 mt-2">
            Scroll to explore my journey
          </p>
        </motion.div>
      </div>
    </section>
  )
}