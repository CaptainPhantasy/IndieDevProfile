'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send as MessageSend, ArrowDown, Briefcase, Brain, Rocket, Target, Smartphone, Wrench } from 'lucide-react'
import { profile } from '@/data/profile'
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-casper-warm-100/30 to-casper-warm-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-xl text-brown-subtle max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mt-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-casper-warm-900">Get in Touch</h3>
              <p className="text-brown-muted mb-6">
                Whether you&apos;re looking to discuss AI strategies, mobile development, or potential collaborations, 
                I&apos;m always open to connecting with fellow developers and innovators.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg metric-card__icon">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-amber-warm hover:text-amber-deep underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg metric-card__icon">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-warm hover:text-amber-deep underline-offset-4 hover:underline"
                    >
                      github.com/douglastalley
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg metric-card__icon">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-warm hover:text-amber-deep underline-offset-4 hover:underline"
                    >
                      linkedin.com/in/douglastalley
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Current Focus */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3 text-casper-warm-900">Current Focus Areas</h4>
              <ul className="text-brown-muted space-y-3">
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-amber-warm flex-shrink-0" />
                  <span>Multi-agent AI systems and orchestration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-amber-warm flex-shrink-0" />
                  <span>Cross-platform mobile development with React Native</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-amber-warm flex-shrink-0" />
                  <span>Developer productivity tools and automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-amber-warm flex-shrink-0" />
                  <span>SaaS product design and architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-amber-warm flex-shrink-0" />
                  <span>AI/ML integration and natural language processing</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="surface shadow-glow border-brown-border h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-casper-warm-900">Ready to Collaborate?</CardTitle>
                <CardDescription className="text-brown-muted text-base">
                  I&apos;m actively seeking opportunities to work on innovative AI/ML projects, 
                  mobile applications, and developer tools. Let&apos;s build something amazing together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-4">
                  <Button size="lg" className="w-full surface shadow-glow text-casper-warm-900 font-semibold hover:shadow-elevated">
                    <a href={`mailto:${profile.email}?subject=Let&apos;s Collaborate!&body=Hi Douglas,%0D%0DI found your portfolio and would like to discuss...`} >
                      <MessageSend className="w-5 h-5 mr-2" />
                      Send Me a Message
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full btn-secondary border-brown-border hover:bg-cream-deep">
                    <a href={profile.social.website} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      Visit LegacyAI.space
                    </a>
                  </Button>
                </CardContent>
                
                <CardFooter className="border-brown-border pt-6">
                  <p className="text-sm text-brown-subtle text-center w-full">
                    &quot;Solo Developer | AI Strategist&quot; - Building the future of intelligent software
                  </p>
                </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        {/* Navigation to Projects */}
        <div className="flex justify-center mt-12">
          <a 
            href="#projects"
            className="text-brown-subtle hover:text-amber-warm transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
