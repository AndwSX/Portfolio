'use client'

import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = ['inicio', 'acerca', 'skills', 'proyectos', 'experiencia']
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return activeSection
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}