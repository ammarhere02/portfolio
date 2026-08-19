'use client'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'

const stack: Record<string, string[]> = {
  Runtime: ['Node.js', 'Express', 'NestJS', 'TypeScript', 'Python'],
  Data: ['PostgreSQL', 'MongoDB', 'Prisma', 'Sequelize', 'Redis'],
  'Auth & Security': ['JWT', 'OAuth 2.0', 'Passport.js', 'bcrypt', 'RBAC'],
  'AI & LLM': ['OpenAI API', 'Claude API', 'Prompt engineering', 'RAG', 'n8n'],
  'Infra & Cloud': ['Docker', 'AWS EC2/S3/RDS', 'nginx', 'PM2', 'Linux'],
  Interface: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
}

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Projects shipped' },
]

export default function SkillsGrid() {
  return (
    <div className="mt-section">
      <Reveal className="rule" />

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <h3 className="display text-2xl">Technical stack</h3>
          <p className="mt-3 max-w-prose text-sm text-fg-muted">
            Backend-weighted, with enough frontend to build and ship a product end
            to end on my own.
          </p>

          <dl className="mt-8 flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="label">{stat.label}</dt>
                <dd className="mt-1.5 font-display text-3xl text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <RevealGroup interval={0.06} className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {Object.entries(stack).map(([category, items]) => (
            <RevealItem key={category}>
              <h4 className="label border-b border-line pb-2.5">{category}</h4>
              <ul className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-fg-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  )
}
