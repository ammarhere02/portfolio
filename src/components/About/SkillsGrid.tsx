'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function SkillsGrid() {
  const coreExpertise = [
    'Node.js & Express.js',
    'TypeScript & JavaScript',
    'PostgreSQL & MongoDB',
    'RESTful API Design',
    'JWT & OAuth 2.0',
    'Docker & AWS',
    'React & Next.js',
    'AI/LLM Integration'
  ]

  const technologies = {
    'Backend': ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'JavaScript'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Sequelize', 'Redis'],
    'Authentication': ['JWT', 'OAuth 2.0', 'Passport.js', 'bcrypt', 'RBAC'],
    'AI & Machine Learning': ['LLM Integration', 'Prompt Engineering', 'OpenAI API', 'Claude API', 'RAG Systems'],
    'DevOps & Cloud': ['Docker', 'AWS EC2/S3/RDS', 'nginx', 'PM2', 'Linux'],
    'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
    'Tools': ['Git', 'VS Code', 'Postman', 'Figma', 'Terminal']
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
          Technical Expertise
        </h3>
        <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
          Specialized in backend development with full-stack capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="card">
            <h4 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-6">
              Core Expertise
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreExpertise.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h4 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-6">
              Years of Experience
            </h4>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  3+
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  Backend Development
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                  15+
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="card">
          <h4 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-8">
            Technology Stack
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-3 pb-2 border-b border-secondary-200 dark:border-secondary-700">
                  {category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-full hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}