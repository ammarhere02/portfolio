'use client'

import Navigation from '@/components/Layout/Navigation'
import HeroSection from '@/components/Hero/HeroSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'
import AboutSection from '@/components/About/AboutSection'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}