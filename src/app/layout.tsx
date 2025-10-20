import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Douglas Talley - AI Strategist & Developer',
  description: 'Vibe Coder | AI Strategist | Full-Stack Developer specializing in AI/ML, React Native, and developer tooling',
  openGraph: {
    title: 'Douglas Talley - AI Strategist & Developer',
    description: 'Showcasing innovative projects in AI, mobile development, and developer tooling',
    url: 'https://douglastalley.com',
    siteName: 'Douglas Talley Portfolio',
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Douglas Talley - AI Strategist & Developer',
    description: 'Vibe Coder | AI Strategist showcasing innovative projects',
    creator: '@vibecoderdoug',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
