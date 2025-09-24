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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Below are some of the projects I've built, showcasing my evolution from curious beginner
            to specialized backend architect. Each project solved real problems and taught me valuable lessons.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon

            return (
              <div key={section.title}>
                <div className="mb-16">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-secondary-100">
                        {section.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 text-lg max-w-4xl leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.projects.map((project, projectIndex) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={projectIndex}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-20">
          <div className="p-8 bg-gradient-to-r from-primary-50 via-blue-50 to-primary-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
              Want to see more?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Check out my GitHub for additional projects, code samples, and contributions to open source.
            </p>
            <a
              href="https://github.com/ammarhere02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Visit My GitHub</span>
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}