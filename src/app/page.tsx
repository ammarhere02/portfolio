import Navigation from '@/components/Layout/Navigation'
import HeroSection from '@/components/Hero/HeroSection'
import AboutSection from '@/components/About/AboutSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]
                   focus:rounded-card focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
