'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Project } from '@/utils/projectData'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
            <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
              <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 rounded-full text-xs font-medium capitalize">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
            Key Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
            Key Features
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm text-secondary-600 dark:text-secondary-400 flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
              Key Achievement
            </h4>
            <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                {project.achievements[0]}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
        <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          Learn More →
        </button>
      </div>
    </motion.div>
  )
}