'use client'

import { motion } from 'framer-motion'
import { Code, Rocket, GraduationCap } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects, getProjectsByCategory } from '@/utils/projectData'

export default function ProjectsSection() {
  const recentProjects = getProjectsByCategory('recent')
  const featuredProjects = getProjectsByCategory('featured')
  const learningProjects = getProjectsByCategory('learning')

  const sections = [
    {
      title: 'Recent Backend Projects',
      subtitle: '2024-2025',
      description: 'Latest backend systems and API architectures showcasing advanced development skills',
      projects: recentProjects,
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Featured Enterprise Solutions',
      subtitle: 'Production Systems',
      description: 'High-impact projects demonstrating scalability and performance optimization',
      projects: featuredProjects,
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Learning Journey',
      subtitle: 'Foundation Projects',
      description: 'Early projects showing growth from frontend focus to backend specialization',
      projects: learningProjects,
      icon: GraduationCap,
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Below are some of the projects I've built, showcasing my evolution from curious beginner 
            to specialized backend architect. Each project solved real problems and taught me valuable lessons.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: sectionIndex * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 25
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-secondary-100">
                        {section.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-3xl">
                    {section.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {section.projects.map((project, projectIndex) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={projectIndex}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-gradient-to-r from-primary-50 via-blue-50 to-primary-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800/30 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4"
            >
              Want to see more?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-secondary-600 dark:text-secondary-300 mb-6"
            >
              Check out my GitHub for additional projects, code samples, and contributions to open source.
            </motion.p>
            <motion.a
              href="https://github.com/ammarhere02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Visit My GitHub</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}