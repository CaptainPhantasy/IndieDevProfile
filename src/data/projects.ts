export interface TechStack {
  category: string
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  gitUrl: string
  liveUrl?: string
  techStack: string[]
  category: 'ai-ml' | 'web' | 'mobile' | 'tools'
  highlights: string[]
  status: 'active' | 'completed' | 'prototype'
  featured: boolean
  github?: {
    stars: number
    forks: number
    language: string
    updatedAt: string
  }
}

export const projects: Project[] = [
  {
    id: 'devlauncher',
    name: 'DevLauncher Dashboard',
    description: 'A flexible, reusable web-based application launcher for your development projects. Configure all your apps once and launch them with a single click.',
    gitUrl: 'https://github.com/CaptainPhantasy/DevLauncherDashboard',
    techStack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    category: 'tools',
    highlights: [
      'Multi-app configuration management',
      'One-click project launching',
      'Developer workflow automation',
      'Clean, intuitive interface'
    ],
    status: 'active',
    featured: true
  },
  {
    id: 'sora2',
    name: 'Sora2 API Video Generator',
    description: 'API-based video generation tool integrating OpenAI Sora for creating dynamic video content from text prompts.',
    gitUrl: 'https://github.com/CaptainPhantasy/Sora2-API-Video-Generator',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'FFmpeg', 'TypeScript'],
    category: 'ai-ml',
    highlights: [
      'OpenAI Sora integration',
      'Text-to-video generation',
      'RESTful API design',
      'Video processing pipeline'
    ],
    status: 'active',
    featured: true
  },
  {
    id: 'casper-atlas',
    name: 'CASPER ATLAS',
    description: 'Multi-agent orchestration system that transforms natural-language project briefs into structured sprint programs with agent assignments and milestone gates.',
    gitUrl: 'https://github.com/CaptainPhantasy/CASPER-ATLAS',
    liveUrl: 'https://legacyai.info/casper',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'WebRTC', 'WebSocket'],
    category: 'ai-ml',
    highlights: [
      'Multi-agent coordination',
      'Natural language processing',
      'Sprint planning automation',
      'Real-time agent communication'
    ],
    status: 'active',
    featured: true
  },
  {
    id: 'smartstax',
    name: 'SmartStax',
    description: 'React Native mobile application with advanced features including dark mode support and modern UI design patterns.',
    gitUrl: 'https://github.com/CaptainPhantasy/SmartStax',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Tailwind CSS', 'NativeWind'],
    category: 'mobile',
    highlights: [
      'React Native development',
      'Cross-platform mobile app',
      'Dark mode optimization',
      'Modern mobile UI/UX',
      'Expo deployment ready'
    ],
    status: 'active',
    featured: true
  }
]

export interface TechStack {
  category: string
  technologies: string[]
}

export interface TechStack {
  category: string
  technologies: string[]
}

export const techStacks: TechStack[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'NativeWind', 'TypeScript']
  },
  {
    category: 'AI/ML',
    technologies: ['OpenAI API', 'Natural Language Processing', 'Multi-agent Systems', 'Computer Vision']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'REST APIs']
  },
  {
    category: 'Developer Tools',
    technologies: ['Git', 'Docker', 'CI/CD', 'Testing', 'Performance Optimization']
  }
]
