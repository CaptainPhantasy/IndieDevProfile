export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string[]
  email: string
  location: string
  social: {
    github: string
    linkedin?: string
    twitter?: string
    website: string
  }
  skills: string[]
  experience: {
    title: string
    company: string
    period: string
    description: string[]
  }[]
}

export const skills = [
  'Multi-agent AI architectures',
  'Advanced prompt engineering',
  'SaaS product design',
  'React Native development',
  'Next.js full-stack development',
  'OpenAI API integration',
  'Natural language processing',
  'Developer workflow automation',
  'Cross-platform development',
  'API design and implementation'
]

export const profile: Profile = {
  name: 'Douglas Talley',
  title: 'AI Strategist & Full-Stack Developer',
  tagline: 'Solo Developer | AI Strategist | Founder of LegacyAI.space',
  bio: [
    'Results-driven AI strategist with 15+ years in IT infrastructure and software development',
    'Specializing in multi-agent AI architectures, advanced prompt engineering, and SaaS product design',
    'Building innovative solutions at the intersection of AI automation and developer productivity',
    'Passionate about creating tools that empower developers and transform workflows'
  ],
  email: 'douglas.talley@legacyai.space',
  location: 'United States',
  social: {
    github: 'https://github.com/CaptainPhantasy',
    linkedin: 'https://www.linkedin.com/in/douglasatalley/',
    website: 'https://legacyai.space'
  },
  skills,
  experience: [
    {
      title: 'AI Strategist & Founder',
      company: 'LegacyAI.space',
      period: 'Present',
      description: [
        'Leading development of AI-powered SaaS solutions',
        'Building CASPER - multi-agent cognitive orchestration system',
        'Creating innovative AI tools for developer productivity'
      ]
    },
    {
      title: 'Senior Full-Stack Developer',
      company: 'Independent Consultant',
      period: '10+ Years',
      description: [
        'Full-stack development for enterprise clients',
        'Mobile application development with React Native',
        'API architecture and system design',
        'Developer tooling and workflow optimization'
      ]
    }
  ]
}
