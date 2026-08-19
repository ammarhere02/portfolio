/**
 * Work history, education, and certifications.
 *
 * Keep this in step with the résumé in public/ — a recruiter reads both, and
 * a mismatch between them is worse than either one alone. Sections render
 * nothing when their array is empty.
 */

export interface Engagement {
  organisation: string
  role: string
  /** e.g. "2024 — 2025" or "2025 — Present" */
  period: string
  location?: string
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Internship'
  summary: string
  highlights: string[]
  /** Slug of a project in projectData that came out of this engagement. */
  relatedProject?: string
}

export interface Education {
  institution: string
  qualification: string
  period: string
  location?: string
  detail?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export const engagements: Engagement[] = [
  {
    organisation: 'Freelance',
    role: 'Software engineer',
    period: '2025 — 2026',
    location: 'Remote',
    type: 'Freelance',
    summary:
      'End-to-end web work for clients, owning the full lifecycle from scoping through deployment.',
    highlights: [
      'Architected and delivered complete web solutions, managing each project from requirements to production',
      'Integrated LLM APIs into client applications to add AI-backed product features',
      'Rebuilt a learning platform’s authentication and backend, then delivered the remaining product work to sign-off',
    ],
    relatedProject: 'trainr',
  },
  {
    organisation: 'Southville Solutions',
    role: 'Backend development intern',
    period: 'Nov 2024 — Jan 2025',
    location: 'Lahore, Pakistan',
    type: 'Internship',
    summary:
      'Built and maintained backend services supporting core features of a production application.',
    highlights: [
      'Built and maintained RESTful APIs in Node.js and FastAPI for production application features',
      'Designed and optimised MySQL schemas through ORM frameworks, improving data retrieval efficiency',
    ],
  },
]

export const education: Education[] = [
  {
    institution: 'University of Central Punjab',
    qualification: 'BS Computer Science',
    period: '2022 — 2026',
    location: 'Lahore, Pakistan',
    detail:
      'Faculty of Information Technology & Computer Science. Final year project: NeuroForce, an AI workforce analytics platform.',
  },
]

export const certifications: Certification[] = [
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'Jun 2026' },
]
