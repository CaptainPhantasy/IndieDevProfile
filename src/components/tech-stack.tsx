'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Bot, Server, Wrench } from 'lucide-react'
import { skills } from '@/data/profile'
import { techStacks } from '@/data/projects'

const stackIcons = {
  'Frontend': Code,
  'Mobile': Smartphone,
  'AI/ML': Bot,
  'Backend': Server,
  'Developer Tools': Wrench,
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-b from-casper-warm-50/50 to-casper-warm-100/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-brown-subtle max-w-2xl mx-auto">
            Comprehensive skill set spanning frontend, mobile, AI/ML, backend, and developer tooling
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => {
            const IconComponent = stackIcons[stack.category as keyof typeof stackIcons]
            
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="metric-card border-brown-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg metric-card__icon">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-casper-warm-900">{stack.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium tech-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-casper-warm-900">Core Competencies</h3>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from(new Set(techStacks.flatMap(stack => stack.technologies))).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-cream-light border-brown-border hover:border-amber-warm hover:text-amber-warm transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
