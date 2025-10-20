import { HeroSection } from '@/components/hero-section'
import { ProjectShowcase } from '@/components/project-showcase'
import { TechStack } from '@/components/tech-stack'
import LiveAppShowcase from '@/components/live-app-showcase'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ProjectShowcase />
      <LiveAppShowcase />
      <TechStack />
      <ContactSection />
    </div>
  )
}
