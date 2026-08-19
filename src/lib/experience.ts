/**
 * Work history and education.
 *
 * Only add entries that can be verified — a recruiter will check. Sections
 * render nothing when their array is empty, so it is safe to leave gaps
 * until the details are confirmed.
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

export const engagements: Engagement[] = [
  {
    organisation: 'Private client',
    role: 'Full-stack developer',
    period: '2024 — 2025',
    location: 'Remote',
    type: 'Contract',
    summary:
      'Took over a partially built learning platform, fixed its authentication and backend problems, and delivered the remaining product work to sign-off.',
    highlights: [
      'Rebuilt instructor and student authentication as two scoped roles on Supabase',
      'Resolved backend defects surfacing during normal use',
      'Shipped course, module, and lesson management with draft and published states',
      'Added auto-generated public instructor pages with shareable community links',
      'Redesigned the instructor dashboard around repeated tasks',
    ],
    relatedProject: 'trainr',
  },
  // TODO: add employment, internships, and other client work here.
]

// TODO: add degree, institution, and dates.
export const education: Education[] = []
