'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, Github, Play, Code, Smartphone, Bot, Rocket } from 'lucide-react'
import { projects } from '@/data/projects'
import { Badge, Button } from '@/components/ui'

const categoryIcons = {
  'ai-ml': Bot,
  'web': Code,
  'mobile': Smartphone,
  'tools': Rocket,
}

const categoryColors = {
  'ai-ml': 'metric-badge border-amber-warm/30',
  'web': 'tech-badge border-amber-warm/30',
  'mobile': 'agent-level text-casper-warm-100 bg-casper-warm-600/30 border-brown-border',
  'tools': 'btn-secondary text-casper-warm-900 border-brown-border',
}

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-casper-warm-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-brown-subtle max-w-2xl mx-auto">
            Showcasing innovative solutions across AI/ML, mobile development, web applications, and developer tools
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border-brown-border ${
                selectedCategory === category 
                  ? 'surface text-casper-warm-900 shadow-glow' 
                  : 'btn-ghost text-brown-muted'
              }`}
            >
              {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = categoryIcons[project.category]
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="agent-card group hover:shadow-glow border-brown-border hover:scale-105 transition-all duration-300 p-6"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${categoryColors[project.category]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-casper-warm-900 group-hover:text-amber-warm transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        <Badge className="tech-badge text-xs">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', ' ')}
                        </Badge>
                        <Badge className="tech-badge text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="surface text-casper-warm-900 shadow-elevated font-semibold">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-brown-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge className="agent-level text-casper-warm-100">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-medium mb-3 text-sm text-brown-muted">Key Features:</h4>
                  <ul className="text-sm text-brown-subtle space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-amber-warm mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-brown-border">
                  <Button asChild size="sm" className="surface flex-1 shadow-glow">
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild variant="outline" size="sm" className="btn-secondary flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/CaptainPhantasy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
