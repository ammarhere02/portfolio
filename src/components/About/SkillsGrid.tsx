'use client'

import { motion } from 'framer-motion'
import { Server, Database, Shield, Code, Cloud, GitBranch, Terminal, Cpu } from 'lucide-react'

export default function SkillsGrid() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 92 },
        { name: 'NestJS', level: 88 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      title: 'Database & ORM',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Prisma ORM', level: 92 },
        { name: 'Sequelize', level: 88 },
        { name: 'Redis', level: 82 }
      ]
    },
    {
      title: 'Authentication & Security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'JWT Tokens', level: 95 },
        { name: 'OAuth 2.0', level: 90 },
        { name: 'RBAC', level: 88 },
        { name: 'Encryption', level: 85 },
        { name: 'API Security', level: 92 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'AWS Services', level: 82 },
        { name: 'nginx', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Monitoring', level: 78 }
      ]
    },
    {
      title: 'Frontend Skills',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Postman', level: 92 },
        { name: 'Linux/Unix', level: 85 },
        { name: 'Terminal', level: 90 }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
          Technical Skills
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across backend development, 
          databases, security, and modern development tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon
          
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-secondary-500 dark:text-secondary-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
          <Terminal className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <span className="text-primary-700 dark:text-primary-300 font-medium terminal-font">
            $ Always learning and growing...
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}