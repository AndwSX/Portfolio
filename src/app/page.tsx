'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/layout/LoadingScreen'
import Navigation from '@/components/layout/Navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import HeroSection from '@/components/sections/HeroSection'

// Dynamic imports for sections below the fold
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true })
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), { ssr: true })
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: true })
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: false })
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true })

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
      
      {!loading && (
        <div className="animate-fade-in">
          <AnimatedBackground />
          <Navigation />
          
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  )
}