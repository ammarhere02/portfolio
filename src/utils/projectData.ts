import { Code, Database, Shield, Server, Globe, Cpu } from 'lucide-react'

export interface Project {
  id: string
  title: string
  category: 'recent' | 'featured' | 'learning'
  year: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  challenges: string[]
  achievements: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  icon: any
}

export const projects: Project[] = [
  {
    id: 'movie-reserve',
    title: 'Movie-Reserve',
    category: 'recent',
    year: '2024',
    description: 'Backend web application for online movie ticket reservations with seat selection and admin functionality',
    longDescription: `Movie-Reserve is a comprehensive backend web application designed for online movie ticket reservations. Built with Node.js and Express, this project demonstrates my ability to create scalable server-side applications with complex business logic.

    The system handles movie listings, seat selection algorithms, user authentication, and administrative controls. It showcases my backend development skills in creating APIs that manage reservations, prevent booking conflicts, and provide seamless user experiences.`,
    technologies: ['Node.js', 'Express', 'JavaScript', 'Backend API', 'Database Management'],
    features: [
      'Online movie ticket reservation system',
      'Dynamic seat selection functionality',
      'Admin dashboard for movie management',
      'User authentication and session management',
      'Booking conflict prevention',
      'RESTful API architecture'
    ],
    challenges: [
      'Implementing complex seat selection logic',
      'Preventing concurrent booking conflicts',
      'Designing efficient database schema',
      'Creating admin controls for movie management'
    ],
    achievements: [
      'Successfully deployed reservation system',
      'Clean backend architecture implementation',
      'Efficient seat selection algorithm',
      'Robust admin functionality'
    ],
    githubUrl: 'https://github.com/ammarhere02/Movie-Reserve',
    icon: Globe
  },
  {
    id: 'blog-post',
    title: 'Blog-Post',
    category: 'recent',
    year: '2024',
    description: 'Personal publishing platform built with TypeScript for content creation and management',
    longDescription: `Blog-Post is a modern personal publishing platform that demonstrates my expertise in TypeScript and full-stack development. This project showcases clean architecture patterns and type-safe development practices for content management systems.

    The platform features robust content creation tools, categorization systems, and efficient post management. Built with a focus on developer experience and maintainable code, it highlights my ability to work with modern TypeScript development patterns and create scalable web applications.`,
    technologies: ['TypeScript', 'Web Development', 'Content Management', 'Frontend Development'],
    features: [
      'Content creation and editing interface',
      'Post categorization and tagging system',
      'Modern TypeScript architecture',
      'Responsive design implementation',
      'Content management dashboard',
      'Type-safe development patterns'
    ],
    challenges: [
      'Implementing rich text editing functionality',
      'Designing flexible content categorization',
      'Creating intuitive user interfaces',
      'Maintaining type safety across components'
    ],
    achievements: [
      'Clean TypeScript implementation',
      'Intuitive content management system',
      'Responsive and modern UI design',
      'Scalable architecture foundation'
    ],
    githubUrl: 'https://github.com/ammarhere02/Blog-Post',
    icon: Code
  },
  {
    id: 'e-store',
    title: 'E-Store',
    category: 'recent',
    year: '2024',
    description: 'Lightweight e-commerce web application with full CRUD functionality for product management',
    longDescription: `E-Store is a lightweight yet comprehensive e-commerce web application that demonstrates my ability to build complete online shopping solutions. Built with JavaScript, this project showcases full CRUD operations, product management systems, and e-commerce functionality.

    The application features a clean, intuitive interface for both customers and administrators, with robust product management capabilities. This project highlights my skills in creating scalable e-commerce solutions with efficient data management and user-friendly interfaces.`,
    technologies: ['JavaScript', 'Web Development', 'E-commerce', 'CRUD Operations', 'Product Management'],
    features: [
      'Complete product catalog management',
      'Full CRUD operations for products',
      'User-friendly shopping interface',
      'Admin product management dashboard',
      'Responsive web design',
      'Efficient data handling and storage'
    ],
    challenges: [
      'Implementing comprehensive CRUD operations',
      'Designing intuitive product management UI',
      'Creating responsive e-commerce layouts',
      'Managing product data efficiently'
    ],
    achievements: [
      'Fully functional e-commerce platform',
      'Clean and maintainable JavaScript code',
      'Intuitive admin and user interfaces',
      'Efficient product management system'
    ],
    githubUrl: 'https://github.com/ammarhere02/E-Store',
    icon: Database
  },
  {
    id: 'todo-list',
    title: 'To-do-List',
    category: 'recent',
    year: '2024',
    description: 'Dynamic task management application with JavaScript for organization and prioritization',
    longDescription: `To-do-List is a comprehensive task management application built with JavaScript that demonstrates my ability to create interactive and dynamic web applications. This project showcases modern JavaScript development practices and efficient DOM manipulation techniques.

    The application features intuitive task organization, priority management, and dynamic updates. It highlights my frontend development skills and ability to create responsive, user-friendly interfaces that enhance productivity and task management workflows.`,
    technologies: ['JavaScript', 'DOM Manipulation', 'Local Storage', 'CSS', 'HTML5'],
    features: [
      'Dynamic task creation and management',
      'Task prioritization and categorization',
      'Interactive user interface',
      'Local storage for data persistence',
      'Responsive design implementation',
      'Real-time task status updates'
    ],
    challenges: [
      'Implementing efficient DOM manipulation',
      'Creating intuitive task organization UI',
      'Managing local storage effectively',
      'Building responsive task interfaces'
    ],
    achievements: [
      'Smooth and responsive user experience',
      'Efficient JavaScript implementation',
      'Intuitive task management workflow',
      'Clean and maintainable code structure'
    ],
    githubUrl: 'https://github.com/ammarhere02/To-do-List',
    icon: Server
  },
  {
    id: 'ai-powerpoint',
    title: 'Ai-PowerPoint',
    category: 'featured',
    year: '2024',
    description: 'AI-powered presentation generation tool built with Python for automated slide creation',
    longDescription: `Ai-PowerPoint is an innovative AI-powered tool that demonstrates my expertise in Python development and artificial intelligence integration. This project showcases my ability to work with AI technologies and create practical automation solutions for content generation.

    The application leverages artificial intelligence to automate the creation of PowerPoint presentations, streamlining the content creation process. This project highlights my skills in Python development, AI integration, and building tools that solve real-world productivity challenges.`,
    technologies: ['Python', 'AI Integration', 'Automation', 'Content Generation', 'API Development'],
    features: [
      'AI-powered presentation generation',
      'Automated slide content creation',
      'Python-based application architecture',
      'Intelligent content structuring',
      'Streamlined presentation workflows',
      'Integration with presentation formats'
    ],
    challenges: [
      'Integrating AI models effectively',
      'Creating intelligent content generation',
      'Building user-friendly automation tools',
      'Managing presentation format compatibility'
    ],
    achievements: [
      'Successful AI-powered automation tool',
      'Efficient Python implementation',
      'Streamlined presentation creation process',
      'Practical AI application development'
    ],
    githubUrl: 'https://github.com/ammarhere02/Ai-PowerPoint',
    icon: Cpu
  },
  {
    id: 'portfolio-foundation',
    title: 'Early Web Development Projects',
    category: 'learning',
    year: '2023-2024',
    description: 'Foundation projects that shaped my journey from frontend to full-stack development',
    longDescription: `This collection represents my early web development journey, where I built various projects that helped me understand fundamental programming concepts and web technologies. These projects were crucial in developing my problem-solving skills and understanding of software development principles.

    Through building these applications, I gained experience with different technologies, learned to work with APIs, manage data, and create user-friendly interfaces. This foundation enabled my transition into more complex backend development and full-stack applications.`,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Web APIs', 'Local Storage'],
    features: [
      'Interactive web applications',
      'Dynamic content management',
      'Responsive user interfaces',
      'Client-side data persistence',
      'Modern JavaScript practices',
      'Cross-browser compatibility'
    ],
    challenges: [
      'Learning JavaScript fundamentals',
      'Understanding DOM manipulation',
      'Creating responsive designs',
      'Managing application state'
    ],
    achievements: [
      'Solid foundation in web development',
      'Understanding of programming principles',
      'Experience with multiple technologies',
      'Bridge to backend development expertise'
    ],
    githubUrl: 'https://github.com/ammarhere02',
    icon: Code
  }
]

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category)

export const getFeaturedProjects = () => 
  projects.filter(project => project.category === 'recent' || project.category === 'featured')

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id)