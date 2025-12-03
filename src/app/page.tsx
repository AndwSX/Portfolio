'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ServicesSection from '@/components/sections/ServicesSection'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isVisible={loading} />
      
      <div 
        className="transition-opacity duration-800"
        style={{ opacity: loading ? 0 : 1 }}
      >
        <AnimatedBackground />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
        </main>
        
        <Footer />
      </div>
    </>
  )
}