'use client'

import { motion } from 'framer-motion'
import { User, Code, Database, Shield, Server, Cloud, GitBranch } from 'lucide-react'
import SkillsGrid from './SkillsGrid'

export default function AboutSection() {
  const journey = [
    {
      year: '2022',
      title: 'Frontend Focus',
      description: 'Started with React, HTML, CSS, and JavaScript. Built responsive UIs and learned modern frontend frameworks.',
      icon: Code,
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2023',
      title: 'Full-Stack Transition',
      description: 'Dove into Node.js and Express. Built my first APIs and learned about databases, authentication, and server architecture.',
      icon: Server,
      color: 'from-green-500 to-teal-500'
    },
    {
      year: '2024',
      title: 'Backend Specialization',
      description: 'Focused on scalable backend systems, microservices, security, and DevOps. Mastered advanced authentication and database optimization.',
      icon: Database,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2025',
      title: 'Systems Architecture',
      description: 'Currently designing enterprise-level systems, focusing on performance, security, and scalability. Leading backend architecture decisions.',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const values = [
    {
      title: 'Clean Code',
      description: 'I believe in writing maintainable, readable code that scales with the business.',
      icon: GitBranch
    },
    {
      title: 'Security First',
      description: 'Every system I build prioritizes security from the ground up, not as an afterthought.',
      icon: Shield
    },
    {
      title: 'Performance',
      description: 'Optimizing for speed and efficiency while maintaining code quality and readability.',
      icon: Server
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            My journey from frontend curiosity to backend expertise, driven by a passion 
            for building systems that solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-secondary-100">
                  My Story
                </h3>
              </div>
              
              <div className="space-y-6 text-secondary-600 dark:text-secondary-300 leading-relaxed">
                <p>
                  I started my development journey with a curiosity about how websites work, 
                  diving into React and frontend development. But as I built more applications, 
                  I became fascinated by what happens behind the scenes - the APIs, databases, 
                  and systems that power user experiences.
                </p>
                
                <p>
                  That curiosity led me to backend development, where I discovered my true passion. 
                  There's something deeply satisfying about architecting systems that handle complex 
                  business logic, secure sensitive data, and scale to serve thousands of users.
                </p>
                
                <p>
                  Today, I specialize in building robust backend systems with Node.js, designing 
                  secure authentication flows, optimizing database performance, and creating 
                  APIs that developers love to work with. I'm based in San Francisco and always 
                  excited about the next technical challenge.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                What Drives Me
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="p-2 bg-secondary-100 dark:bg-secondary-700 rounded-lg">
                        <Icon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">
                          {value.title}
                        </h4>
                        <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-secondary-900 dark:text-secondary-100 mb-8">
                My Development Journey
              </h3>
              
              <div className="space-y-8">
                {journey.map((phase, index) => {
                  const Icon = phase.icon
                  return (
                    <motion.div
                      key={phase.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start space-x-4"
                    >
                      {index !== journey.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-secondary-200 dark:bg-secondary-700"></div>
                      )}
                      
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color} shadow-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                            {phase.title}
                          </h4>
                          <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 rounded-full text-xs font-medium text-secondary-600 dark:text-secondary-400">
                            {phase.year}
                          </span>
                        </div>
                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <SkillsGrid />
      </div>
    </section>
  )
}