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
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      className="card group hover:shadow-2xl transition-all duration-500 hover:border-primary-200 dark:hover:border-primary-700 relative overflow-hidden backdrop-blur-sm"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-primary-400 via-transparent to-blue-400 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-3 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 rounded-xl shadow-md group-hover:shadow-lg group-hover:from-primary-200 group-hover:to-primary-100 dark:group-hover:from-primary-800/50 dark:group-hover:to-primary-700/30 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </motion.div>
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
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gradient-to-r from-secondary-100 to-secondary-50 dark:from-secondary-700 dark:to-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-700 dark:to-primary-600 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
              >
                +{project.technologies.length - 4} more
              </motion.span>
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
              Key Achievement
            </h4>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-3 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-100 dark:border-primary-800/30 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300"
            >
              <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                {project.achievements[0]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
        <div className="flex space-x-3">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Demo</span>
            </motion.a>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
        >
          <span>Learn More</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:animate-none"
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </div>
    </motion.div>
  )
}