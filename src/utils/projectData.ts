import { Brain, Code, Cpu, Database, Globe, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface MediaItem {
  type: 'image' | 'video'
  src: string
  /** Poster frame for videos — avoids a black box before playback. */
  poster?: string
  title: string
  description?: string
}

export interface Project {
  /** URL slug — used for /projects/[slug]. */
  id: string
  title: string
  category: 'featured' | 'recent' | 'learning'
  year: string
  /** One line for cards and the project index. */
  summary: string
  role: string
  /** What was actually wrong or needed. */
  problem: string
  /** How it was solved, step by step. */
  approach: string[]
  /** What shipped. Only claims that can be demonstrated. */
  outcome: string[]
  technologies: string[]
  features: string[]
  challenges: string[]
  githubUrl?: string
  liveUrl?: string
  media?: MediaItem[]
  icon: LucideIcon
}

export const projects: Project[] = [
  {
    id: 'trainr',
    title: 'Trainr',
    category: 'featured',
    year: '2024–2025',
    summary:
      'A learning platform where instructors build courses, publish a public page, and run their own student community.',
    role: 'Full-stack developer — client engagement',
    problem:
      'The client had a partially built learning platform with a broken authentication flow, backend issues that surfaced under normal use, and an interface that made course creation harder than it needed to be. Two distinct user types — instructors and students — had to share one system without leaking each other’s data.',
    approach: [
      'Rebuilt authentication as two scoped roles on Supabase Auth, so an instructor dashboard and a student portal can share a backend without either seeing the other’s data.',
      'Reworked the course model around modules and lessons, with draft/published state and per-course pricing, so instructors can stage work before it goes live.',
      'Added lesson authoring that accepts external video URLs (Loom, and similar), a duration field, and an optional free-preview flag per lesson.',
      'Built a public instructor page that generates a shareable community URL, giving instructors a link to distribute without touching any settings.',
      'Rewrote the dashboard interface — navigation, course cards, and content management — around the tasks instructors actually repeat.',
    ],
    outcome: [
      'Delivered against the client’s requirements and signed off.',
      'Instructor and student authentication flows working end to end, including community-scoped student signup.',
      'Course lifecycle complete: create, add modules and lessons, set pricing, publish, and share a public page.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row-Level Security',
      'Auth',
      'Tailwind CSS',
    ],
    features: [
      'Dual-role authentication for instructors and students',
      'Course management with draft, published, and pricing states',
      'Module and lesson authoring with embedded video',
      'Auto-generated public instructor and community pages',
      'Content calendar, sales view, and member area',
    ],
    challenges: [
      'Keeping instructor and student data isolated within one Supabase project',
      'Modelling courses, modules, and lessons without over-normalising',
      'Making a multi-step authoring flow feel like a single task',
    ],
    media: [
      {
        type: 'video',
        src: '/projects/trainr/demo.mp4',
        poster: '/projects/trainr/demo-poster.webp',
        title: 'Course authoring walkthrough',
        description:
          'Creating a course, adding a module and lessons, attaching a video, and publishing.',
      },
      {
        type: 'image',
        src: '/projects/trainr/01-instructor-signin.webp',
        title: 'Instructor sign-in',
        description: 'The instructor entry point, separate from the student flow.',
      },
      {
        type: 'image',
        src: '/projects/trainr/02-manage-courses.webp',
        title: 'Course management',
        description:
          'Courses with published and draft states, difficulty level, and per-course pricing.',
      },
      {
        type: 'image',
        src: '/projects/trainr/03-about-page-builder.webp',
        title: 'Public page generation',
        description:
          'Each instructor gets a shareable about-page URL, with a preview across breakpoints.',
      },
      {
        type: 'image',
        src: '/projects/trainr/04-public-community.webp',
        title: 'Public community page',
        description:
          'The student-facing page an instructor shares. Shown on a demo account with seeded figures.',
      },
      {
        type: 'image',
        src: '/projects/trainr/05-student-signin.webp',
        title: 'Community-scoped student sign-in',
        description:
          'Students join through a specific instructor’s link and land in that community.',
      },
    ],
    icon: Brain,
  },
  {
    id: 'ai-powerpoint',
    title: 'AI Presentation Generator',
    category: 'featured',
    year: '2025',
    summary:
      'A Python pipeline that turns a prompt into a formatted .pptx — text, layout, generated images, and flowcharts.',
    role: 'Solo project',
    problem:
      'Getting a usable deck out of an LLM is not one prompt. Raw model output has to be parsed into structured slides, mapped onto real layouts, and written into a PowerPoint file that opens cleanly — and long decks blow past a single context window.',
    approach: [
      'Split generation into stages — summarise and classify, parse the markdown response, then render — so a failure in one stage does not corrupt the whole deck.',
      'Built a renderer per content type: bullets, tables, paragraphs, flowcharts, and images, each writing into python-pptx through a shared slide-utility layer.',
      'Added flowchart generation via Graphviz, converting described processes into diagrams and inserting them as slide images.',
      'Wired image generation through DALL·E with an Unsplash fallback, so a slide still gets artwork when generation fails.',
      'Handled template and theme application separately from content, so the same deck can be re-skinned without regenerating text.',
    ],
    outcome: [
      'End-to-end pipeline: prompt in, formatted .pptx out.',
      'Modular renderers — adding a new slide type means adding one module, not editing the generator.',
      'Graceful degradation on image generation rather than a failed run.',
    ],
    technologies: [
      'Python',
      'OpenAI API',
      'python-pptx',
      'Graphviz',
      'DALL·E',
      'Prompt engineering',
    ],
    features: [
      'Prompt-to-deck generation with structured slide output',
      'Per-type renderers for bullets, tables, paragraphs, and flowcharts',
      'Generated slide imagery with a stock-photo fallback',
      'Template and fade-effect application',
      'Markdown response parsing into a slide model',
    ],
    challenges: [
      'Keeping LLM output structured enough to render reliably',
      'Staying within token limits on longer decks',
      'Writing valid .pptx layouts programmatically',
    ],
    media: [
      {
        type: 'video',
        src: '/projects/ai-powerpoint/demo.mp4',
        poster: '/projects/ai-powerpoint/demo-poster.webp',
        title: 'Pipeline walkthrough',
        description:
          'The module layout and generation flow, from prompt through rendering to output.',
      },
    ],
    githubUrl: 'https://github.com/ammarhere02/Ai-PowerPoint',
    icon: Cpu,
  },
  {
    id: 'movie-reserve',
    title: 'Movie-Reserve',
    category: 'recent',
    year: '2024',
    summary:
      'Backend for cinema ticketing — seat selection, booking, and an admin side for managing screenings.',
    role: 'Solo project',
    problem:
      'Seat booking is a concurrency problem wearing a CRUD costume. Two people selecting the same seat at the same moment must not both succeed.',
    approach: [
      'Modelled screenings and seats so availability is derived from bookings rather than stored as mutable state.',
      'Built the reservation path to reject conflicting bookings instead of overwriting them.',
      'Separated admin routes for managing films and showings from the public booking API.',
    ],
    outcome: [
      'Working reservation flow with seat selection and conflict rejection.',
      'RESTful API with an admin surface for screening management.',
    ],
    technologies: ['Node.js', 'Express', 'JavaScript', 'REST API'],
    features: [
      'Seat selection with conflict prevention',
      'Admin controls for films and screenings',
      'Session-based authentication',
      'RESTful route structure',
    ],
    challenges: [
      'Preventing double-booking under concurrent requests',
      'Designing a seat model that scales past one screen',
    ],
    githubUrl: 'https://github.com/ammarhere02/Movie-Reserve',
    icon: Globe,
  },
  {
    id: 'blog-post',
    title: 'Blog-Post',
    category: 'recent',
    year: '2024',
    summary: 'A TypeScript publishing platform — writing, categorising, and managing posts.',
    role: 'Solo project',
    problem:
      'I wanted a content platform where the types described the domain, so that a malformed post could not reach the renderer.',
    approach: [
      'Typed the content model end to end so post shape is enforced at compile time.',
      'Built categorisation and tagging into the model rather than bolting it on.',
      'Kept the editing interface and the storage layer independent.',
    ],
    outcome: [
      'Type-safe content pipeline from editor to render.',
      'Working post management with categories and tags.',
    ],
    technologies: ['TypeScript', 'Content modelling', 'Frontend'],
    features: [
      'Post creation and editing',
      'Categories and tagging',
      'Type-safe content model',
      'Management dashboard',
    ],
    challenges: ['Rich text handling', 'Keeping types honest across the boundary'],
    githubUrl: 'https://github.com/ammarhere02/Blog-Post',
    icon: Code,
  },
  {
    id: 'e-store',
    title: 'E-Store',
    category: 'recent',
    year: '2024',
    summary: 'A lightweight storefront with full product CRUD and an admin catalogue view.',
    role: 'Solo project',
    problem:
      'A small commerce build to get the fundamentals right: product lifecycle, catalogue state, and an admin path that does not require touching the database.',
    approach: [
      'Implemented the complete product lifecycle — create, read, update, delete — against a single source of truth.',
      'Split the customer catalogue view from the admin management view.',
    ],
    outcome: [
      'Working storefront with a functioning admin catalogue.',
      'Complete CRUD coverage on products.',
    ],
    technologies: ['JavaScript', 'CRUD', 'E-commerce'],
    features: [
      'Product catalogue',
      'Full CRUD operations',
      'Admin management view',
      'Responsive layout',
    ],
    challenges: ['Keeping catalogue and admin state in sync'],
    githubUrl: 'https://github.com/ammarhere02/E-Store',
    icon: Database,
  },
  {
    id: 'todo-list',
    title: 'To-do-List',
    category: 'learning',
    year: '2023',
    summary:
      'Task manager with priorities and local persistence — where I learned DOM state the hard way.',
    role: 'Solo project',
    problem:
      'An early project to understand how state, the DOM, and persistence fit together without a framework holding the pieces.',
    approach: [
      'Managed task state directly and re-rendered from it, rather than mutating the DOM ad hoc.',
      'Persisted to localStorage so state survived a refresh.',
    ],
    outcome: [
      'Working task manager with priorities and categories.',
      'The lesson that led me toward frameworks: manual DOM state does not scale.',
    ],
    technologies: ['JavaScript', 'DOM', 'localStorage', 'CSS'],
    features: [
      'Task creation and prioritisation',
      'Categories',
      'Local persistence',
      'Live status updates',
    ],
    challenges: ['Keeping DOM and state in sync without a framework'],
    githubUrl: 'https://github.com/ammarhere02/To-do-List',
    icon: Server,
  },
]

export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter((project) => project.category === category)

export const getProjectById = (id: string) => projects.find((project) => project.id === id)

/**
 * Card cover: prefer a video poster (the walkthrough is the best single frame),
 * then fall back to the first still. Undefined when a project has no media.
 */
export const getProjectCover = (project: Project) => {
  const poster = project.media?.find((item) => item.type === 'video' && item.poster)?.poster
  return poster ?? project.media?.find((item) => item.type === 'image')?.src
}
