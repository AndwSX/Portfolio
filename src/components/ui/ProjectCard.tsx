'use client'

import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="group glass-strong rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-glow animate-scale-in"
      style={{ animationDelay: project.delay }}
    >
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <i className={`${project.icon} text-white text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300`}></i>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold font-display">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4">
          <button className="flex-1 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <i className="ri-external-link-line"></i>
            Ver Proyecto
          </button>
          <button className="p-2.5 rounded-xl glass transition-all duration-300 hover:scale-105">
            <i className="ri-github-fill text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}