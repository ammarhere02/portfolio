'use client'

import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ammarhere02',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ammarhere02',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:ammar@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer id="contact" className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Ammar Khan</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              Backend developer and systems architect specializing in scalable APIs and secure authentication systems.
            </p>
            <div className="flex items-center text-secondary-600 dark:text-secondary-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-800 hover:bg-secondary-300 dark:hover:bg-secondary-700 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-200 dark:border-secondary-800 mt-8 pt-8 text-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            © {new Date().getFullYear()} Ammar Khan. Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}