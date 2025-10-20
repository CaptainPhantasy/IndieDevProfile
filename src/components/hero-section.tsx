'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Bot, Code, Smartphone } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button, Badge } from '@/components/ui'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-casper-warm-50 to-casper-warm-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-orange-glow rounded-full blur-3xl animate-float-animation" />
        <div className="absolute top-0 -right-1/4 w-96 h-96 bg-yellow-glow rounded-full blur-3xl animate-float-animation animation-delay-2000" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-casper-warm-400/30 rounded-full blur-3xl animate-float-animation animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="gradient-text">
                {profile.name}
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {profile.title}
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="metric-badge text-xs md:text-sm px-4 py-2 border-amber-warm/30 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                AI Strategist
              </Badge>
              <Badge className="metric-badge text-xs md:text-sm px-4 py-2 border-amber-warm/30 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Full-Stack Developer
              </Badge>
              <Badge className="metric-badge text-xs md:text-sm px-4 py-2 border-amber-warm/30 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobile Developer
              </Badge>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-brown-subtle max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {profile.tagline}
          </motion.p>

          {/* Bio */}
          <motion.div 
            className="max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {profile.bio.map((line, index) => (
              <p key={index} className="text-brown-muted">
                {line}
              </p>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="surface text-casper-warm-900 font-semibold shadow-glow">
              <a href="#projects" className="text-lg px-8 py-3">
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary text-casper-warm-900 border-brown-border hover:bg-cream-deep">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a 
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-subtle hover:text-amber-warm transition-colors hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-subtle hover:text-amber-warm transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-brown-subtle hover:text-amber-warm transition-colors hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#projects" 
            className="text-brown-subtle hover:text-amber-warm transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
