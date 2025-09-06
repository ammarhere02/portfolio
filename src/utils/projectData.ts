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
    id: 'movie-booking',
    title: 'Movie Booking Application',
    category: 'recent',
    year: '2024',
    description: 'Full-stack React application with Node.js backend for seamless movie booking experience',
    longDescription: `The challenge was creating a seamless booking experience that handles concurrent users, payment processing, and real-time seat availability. I architected a robust backend system using Node.js and Express, implementing JWT-based authentication and role-based access control to secure user sessions and booking data.

    The system handles complex business logic including seat locking during booking process, payment integration, and automated email confirmations. Built with React frontend for intuitive user experience and Express backend for reliable API performance.`,
    technologies: ['React', 'Node.js', 'Express', 'JWT Auth', 'MongoDB', 'Stripe API'],
    features: [
      'Real-time seat availability tracking',
      'Secure payment processing with Stripe',
      'JWT-based authentication system',
      'Role-based access control (User, Admin)',
      'Automated email confirmations',
      'Responsive mobile-first design'
    ],
    challenges: [
      'Preventing double-booking with concurrent users',
      'Implementing secure payment flow',
      'Managing complex state for seat selection',
      'Optimizing database queries for performance'
    ],
    achievements: [
      'Zero double-booking incidents with locking mechanism',
      'Sub-second API response times',
      '99.9% uptime in production',
      'Secure payment processing with PCI compliance'
    ],
    githubUrl: 'https://github.com/ammarhere02/movie-booking-app',
    icon: Globe
  },
  {
    id: 'auth-service',
    title: 'Authentication Service API',
    category: 'recent',
    year: '2024',
    description: 'Comprehensive authentication microservice with JWT, OAuth, and RBAC implementation',
    longDescription: `Built a scalable authentication microservice that handles user management, JWT token generation with refresh token rotation, OAuth integration with multiple providers, and comprehensive role-based access control. The service is designed to be provider-agnostic and easily integrable with any frontend application.

    Implemented advanced security features including rate limiting, account lockout mechanisms, password strength validation, and audit logging. The service supports multiple authentication strategies and can scale horizontally to handle millions of users.`,
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'JWT', 'OAuth 2.0'],
    features: [
      'JWT with refresh token rotation',
      'OAuth integration (Google, GitHub, LinkedIn)',
      'Role-based access control (RBAC)',
      'Rate limiting and brute force protection',
      'Account verification via email',
      'Password reset functionality',
      'Comprehensive audit logging'
    ],
    challenges: [
      'Implementing secure token refresh mechanism',
      'Managing OAuth provider inconsistencies',
      'Designing flexible RBAC system',
      'Ensuring GDPR compliance for user data'
    ],
    achievements: [
      'Handles 10K+ concurrent authentications',
      'Zero security breaches in 6 months production',
      '99.99% API availability',
      'OWASP security compliance'
    ],
    githubUrl: 'https://github.com/ammarhere02/auth-service-api',
    icon: Shield
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    category: 'recent',
    year: '2024',
    description: 'Enterprise-grade inventory management with real-time tracking and analytics',
    longDescription: `Developed a comprehensive inventory management system for a mid-size retail company, handling complex inventory operations including stock tracking, supplier management, automated reordering, and detailed analytics. The system integrates with multiple warehouse locations and provides real-time visibility into stock levels.

    Implemented advanced features like predictive analytics for demand forecasting, automated low-stock alerts, and comprehensive reporting dashboard. The system reduced manual inventory tasks by 80% and improved stock accuracy to 99.5%.`,
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'Chart.js'],
    features: [
      'Real-time inventory tracking',
      'Automated reorder point calculations',
      'Supplier management and integration',
      'Multi-location warehouse support',
      'Demand forecasting analytics',
      'Comprehensive reporting dashboard',
      'Barcode scanning integration'
    ],
    challenges: [
      'Handling concurrent inventory updates',
      'Implementing complex business rules',
      'Optimizing queries for large datasets',
      'Building accurate forecasting algorithms'
    ],
    achievements: [
      '80% reduction in manual inventory tasks',
      '99.5% inventory accuracy improvement',
      '60% faster stock-taking process',
      'Real-time visibility across 5 locations'
    ],
    githubUrl: 'https://github.com/ammarhere02/inventory-system',
    icon: Database
  },
  {
    id: 'microservices-platform',
    title: 'Docker Microservices Platform',
    category: 'recent',
    year: '2024',
    description: 'Containerized microservices architecture with Docker, nginx, and service mesh',
    longDescription: `Architected and implemented a complete microservices platform using Docker containers, featuring service discovery, load balancing, centralized logging, and monitoring. The platform supports independent deployment and scaling of services while maintaining data consistency and fault tolerance.

    Implemented CI/CD pipelines with automated testing, security scanning, and deployment strategies. The platform serves as a foundation for multiple applications and has improved deployment frequency by 10x while reducing downtime to near zero.`,
    technologies: ['Docker', 'Node.js', 'nginx', 'Redis', 'PostgreSQL', 'Prometheus'],
    features: [
      'Containerized service architecture',
      'Service discovery and load balancing',
      'Centralized logging with ELK stack',
      'Monitoring and alerting with Prometheus',
      'Automated CI/CD pipelines',
      'Database sharding and replication',
      'API gateway with rate limiting'
    ],
    challenges: [
      'Managing service-to-service communication',
      'Implementing distributed transaction handling',
      'Ensuring data consistency across services',
      'Optimizing container resource usage'
    ],
    achievements: [
      '10x improvement in deployment frequency',
      '99.99% system availability',
      '70% reduction in infrastructure costs',
      'Zero-downtime deployments'
    ],
    githubUrl: 'https://github.com/ammarhere02/docker-microservices',
    icon: Server
  },
  {
    id: 'api-gateway',
    title: 'Enterprise API Gateway',
    category: 'featured',
    year: '2023',
    description: 'High-performance API gateway with rate limiting, caching, and analytics',
    longDescription: `Built a custom API gateway solution to handle authentication, rate limiting, request/response transformation, and analytics for a suite of microservices. The gateway processes millions of requests daily while maintaining low latency and high availability.

    Implemented advanced features including intelligent caching, request routing based on content, circuit breakers for fault tolerance, and comprehensive API analytics. The gateway has become the central nervous system for all API traffic in the organization.`,
    technologies: ['Node.js', 'Redis', 'nginx', 'PostgreSQL', 'Prometheus', 'Grafana'],
    features: [
      'High-throughput request processing',
      'Intelligent caching strategies',
      'Dynamic rate limiting per client',
      'Request/response transformation',
      'Circuit breaker pattern implementation',
      'Real-time API analytics',
      'Multi-tenant authentication'
    ],
    challenges: [
      'Achieving sub-10ms response times',
      'Handling traffic spikes gracefully',
      'Implementing complex routing logic',
      'Maintaining backward compatibility'
    ],
    achievements: [
      'Processing 5M+ requests/day',
      'Average response time under 8ms',
      '99.99% uptime over 12 months',
      '50% reduction in backend load'
    ],
    githubUrl: 'https://github.com/ammarhere02/api-gateway',
    icon: Cpu
  },
  {
    id: 'learning-management',
    title: 'Learning Management System',
    category: 'learning',
    year: '2023',
    description: 'Early full-stack project showcasing growth in backend development',
    longDescription: `One of my early full-stack projects that marked my transition from frontend-focused development to backend specialization. Built a complete learning management system with user authentication, course management, progress tracking, and file uploads.

    This project was instrumental in deepening my understanding of backend architecture, database design, and API development. It showcased my ability to learn and implement complex features while maintaining clean, scalable code.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer', 'Cloudinary'],
    features: [
      'User authentication and profiles',
      'Course creation and management',
      'Progress tracking and certificates',
      'File upload and streaming',
      'Discussion forums',
      'Quiz and assessment system'
    ],
    challenges: [
      'Learning backend development patterns',
      'Implementing file upload handling',
      'Designing normalized database schema',
      'Building RESTful API architecture'
    ],
    achievements: [
      'Successfully launched for 100+ students',
      'Clean, maintainable codebase',
      'Responsive design across all devices',
      'Foundation for future backend expertise'
    ],
    githubUrl: 'https://github.com/ammarhere02/learning-management',
    icon: Code
  }
]

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category)

export const getFeaturedProjects = () => 
  projects.filter(project => project.category === 'recent' || project.category === 'featured')

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id)