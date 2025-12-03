'use client'

import ProjectCard from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/lib/constants'

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Mis <span className="text-cyan-500">Proyectos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}