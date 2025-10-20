'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Loader, Monitor, AlertTriangle } from 'lucide-react'
import { Button, Badge, Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from '@/components/ui'
import React, { useState, useEffect } from 'react'

interface LiveApp {
  id: string
  name: string
  url: string
  description: string
  category: string
  live: boolean
}

interface LiveAppState {
  loading: boolean
  error: boolean
  loaded: boolean
  status: 'pending' | 'error' | '⏳ Loading...'
}

const LiveAppShowcase = () => {
  const [iframeStates, setIframeStates] = useState<Record<string, LiveAppState>>({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const liveApps: LiveApp[] = [
    {
      id: 'sympaticocx',
      name: 'SympaticoCX',
      url: 'https://sympaticocx.com',
      description: 'Customer experience management platform with real-time analytics and engagement tools.',
      category: 'Customer Experience',
      live: true
    },
    {
      id: 'firstlightcx',
      name: 'FirstLightCX',
      url: 'https://firstlightcx.com',
      description: 'AI-powered customer service platform with intelligent routing and automation.',
      category: 'Customer Service AI',
      live: true
    },
    {
      id: 'everlastingvows',
      name: 'Everlasting Vows',
      url: 'https://everlastingvows.net',
      description: 'Elegant wedding planning and management platform with vendor coordination tools.',
      category: 'Wedding Management',
      live: true
    }
  ];

  const handleIframeLoad = (appId: string) => {
    setIframeStates(prev => ({ ...prev, [appId]: { ...prev[appId], loaded: true, loading: false, error: false } }));
    const placeholder = document.getElementById(`loading-${appId}`);
    if (placeholder) {
      setTimeout(() => {
        if (placeholder) {
          placeholder.style.opacity = '0';
          placeholder.style.pointerEvents = 'none';
        }
      }, 500);
    }
  };

  const refreshIframe = (appId: string, url: string) => {
    const iframe = document.getElementById(appId) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = '';
      setTimeout(() => {
        iframe.src = url;
      }, 100);
    }
  };

  const categories = ['All', 'Customer Experience', 'Customer Service AI', 'Wedding Management'];
  const filteredProjects = liveApps.filter(app => selectedCategory === 'All' || app.category === selectedCategory);

  // Initialize loading states
  useEffect(() => {
    const initialStates: Record<string, LiveAppState> = {};
    liveApps.forEach(app => {
      initialStates[app.id] = { loading: true, loaded: false, error: false, status: '⏳ Loading...' };
    });
    setIframeStates(initialStates);
  }, []);

  return (
    <section id="live-apps" className="py-20 px-4 bg-gradient-to-b from-casper-warm-50/30 to-casper-warm-200/40">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Applications</span>
          </h2>
          <p className="text-xl text-brown-subtle max-w-2xl mx-auto">
            Explore my deployed web applications showcasing modern development, UX design, and real-world solutions.
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
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Live Apps Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="surface shadow-glow border-brown border-casper-border rounded-2xl overflow-hidden max-w-5xl mx-auto"
            >
              <CardHeader className="p-8 pb-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-amber-warm/10">
                      <Monitor className="w-6 h-3" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-casper-warm-900 group-hover:text-amber-warm transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex gap-2 mt-1">
                        <Badge className="tech-badge text-xs">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', '')}
                        </Badge>
                        <Badge className="tech-badge text-xs">
                          {project.live ? 'Live' : 'In Development'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Description */}
              <CardContent className="pb-6">
                <p className="text-brown-muted text-base leading-relaxed mb-4 max-w-4xl">
                  {project.description}
                </p>

                {/* URL Link */}
                <div className="flex items-center gap-2 mb-4">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brown-subtle hover:text-amber-warm underline-offset-2 transition-colors flex items-center gap-1.5 bg-casper-warm-100/30 px-3 py-1.5 rounded-full border border-brown-border/30"
                  >
                    <span>{project.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Live Preview */}
                <div className="relative w-full bg-white rounded-lg border border-brown-border/20 overflow-hidden" style={{ height: '400px' }}>
                  {/* Loading Placeholder */}
                  <div 
                    id={`loading-${project.id}`}
                    className="absolute inset-0 flex items-center justify-center bg-casper-warm-50/50 z-10 transition-opacity duration-300"
                  >
                    <div className="text-center">
                      <Loader className="w-8 h-8 animate-spin text-amber-warm mx-auto mb-2" />
                      <p className="text-sm text-brown-subtle">Loading preview...</p>
                    </div>
                  </div>

                  {/* Error Placeholder */}
                  {iframeStates[project.id]?.error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-warm/10 z-10">
                      <div className="text-center p-4">
                        <AlertTriangle className="w-8 h-8 text-amber-warm mx-auto mb-2" />
                        <p className="text-sm text-amber-deep">Preview unavailable</p>
                        <p className="text-xs text-brown-subtle mt-1">Some sites may block iframe embedding</p>
                      </div>
                    </div>
                  )}

                  {/* Live Iframe */}
                  <iframe
                    id={project.id}
                    src={project.url}
                    className="w-full h-full border-0"
                    onLoad={() => handleIframeLoad(project.id)}
                    onError={() => setIframeStates(prev => ({ ...prev, [project.id]: { ...prev[project.id], loaded: false, loading: false, error: true } }))}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </CardContent>

              <CardFooter className="p-6 border-t-brown-border/20">
                <div className="flex items-center justify-between w-full">
                  <div className="text-xs text-brown-subtle">
                    Status: 
                    <span className={`ml-2 font-medium ${
                      iframeStates[project.id]?.loaded ? 'text-green-600' : 
                      iframeStates[project.id]?.error ? 'text-amber-warm' : 
                      'text-brown-subtle'
                    }`}>
                      {iframeStates[project.id]?.loaded ? '✓ Live Preview' : 
                       iframeStates[project.id]?.error ? '⚠ Preview Unavailable' : 
                       '⏳ Loading...'}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => refreshIframe(project.id, project.url)}
                    className="text-xs"
                  >
                    Refresh
                  </Button>
                </div>
              </CardFooter>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-casper-warm-100/50 rounded-2xl p-6 border border-brown-border/30 inline-block overflow-hidden">
            <p className="text-brown-foreground text-center max-w-4xl mx-auto">
              These applications demonstrate full-stack development, modern UX patterns, and scalable architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveAppShowcase
