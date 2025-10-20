'use client'

import { Github, Linkedin, Mail, Globe } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-4">{profile.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {profile.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              Building innovative solutions at the intersection of AI, mobile, and web development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#projects" className="hover:text-primary transition-colors">DevLauncher Dashboard</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">CASPER ATLAS</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">SmartStax</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Sora2 API Generator</a></li>
            </ul>
          </div>
          
          {/* Expertise */}
          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Multi-agent AI Systems</li>
              <li>React Native Development</li>
              <li>Next.js & Full-Stack</li>
              <li>Developer Tooling</li>
              <li>API Design & Integration</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
              <div className="flex gap-2">
                <a 
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border hover:bg-accent hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border hover:bg-accent hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={profile.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border hover:bg-accent hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js 15 • TypeScript • Tailwind CSS • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
