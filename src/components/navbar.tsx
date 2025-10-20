'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { cn } from '@/components/utils'
import { profile } from '@/data/profile'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "surface border-brown-border shadow-glow backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-casper-warm-900">
              {profile.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-brown-subtle hover:text-amber-warm transition-colors">
              Projects
            </a>
            <a href="#live-apps" className="text-brown-subtle hover:text-amber-warm transition-colors">
              Live Apps
            </a>
            <a href="#tech-stack" className="text-brown-subtle hover:text-amber-warm transition-colors">
              Tech Stack
            </a>
            <a href="#contact" className="text-brown-subtle hover:text-amber-warm transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-subtle hover:text-amber-warm transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-subtle hover:text-amber-warm transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brown-subtle hover:text-amber-warm transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden surface border-brown-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#projects" 
                className="block px-3 py-2 text-brown-subtle hover:text-amber-warm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#live-apps"
                className="block px-3 py-2 text-brown-subtle hover:text-amber-warm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Apps
              </a>
              <a 
                href="#tech-stack"
                className="block px-3 py-2 text-brown-subtle hover:text-amber-warm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tech Stack
              </a>
              <a 
                href="#contact"
                className="block px-3 py-2 text-brown-subtle hover:text-amber-warm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 px-3 py-2">
                <a 
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-subtle hover:text-amber-warm transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-subtle hover:text-amber-warm transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
