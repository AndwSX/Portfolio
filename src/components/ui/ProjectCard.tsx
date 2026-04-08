'use client'

import { useEffect } from 'react';
import { Project } from '@/lib/types'

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
};

type ModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <div
      className={`
        group glass-strong rounded-3xl overflow-hidden transition-all duration-500 
        flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px]
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}
        hover:scale-105 hover:opacity-100 hover:shadow-glow cursor-pointer
      `}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Icon floating */}
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i className={`${project.icon} text-cyan-400 text-2xl`}></i>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold font-display group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tags siempre visibles */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="pt-2">
          <button className="w-full py-2.5 rounded-xl glass font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 flex items-center justify-center gap-2 text-sm">
            <span>Ver detalles</span>
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in bg-black/60 dark:bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div 
        className="glass-strong rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up bg-white/95 dark:bg-black/40 border-gray-200/50 dark:border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 bg-white/80 dark:bg-black/40"
        >
          <i className="ri-close-line text-xl text-gray-800 dark:text-white"></i>
        </button>

        {/* Large Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Icon en modal */}
          <div className="absolute bottom-6 left-6">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center bg-white/20 dark:bg-black/40">
              <i className={`${project.icon} text-cyan-400 text-3xl`}></i>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 glass rounded-xl text-sm font-medium border-cyan-500/30 bg-white/50 dark:bg-black/20 text-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Features/Details Section */}
          <div className="glass rounded-2xl p-6 space-y-4 bg-white/60 dark:bg-black/20 border-gray-200/50 dark:border-white/10">
            <h3 className="text-xl font-bold text-cyan-500">Características destacadas</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-cyan-500 mt-1"></i>
                <span>Arquitectura escalable y modular</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-cyan-500 mt-1"></i>
                <span>Implementación de mejores prácticas</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-cyan-500 mt-1"></i>
                <span>Diseño responsive y accesible</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.demo}
              className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="ri-external-link-line"></i>
              Ver Proyecto
            </a>
            <a
              href={project.github}
              className="py-3 px-6 rounded-xl glass transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 flex items-center justify-center gap-2 bg-white/50 dark:bg-black/20 text-gray-800 dark:text-white"
              target='_blank'
              onClick={(e) => e.stopPropagation()}
            >
              <i className="ri-github-fill text-xl"></i>
              <span className="hidden md:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}