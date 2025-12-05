import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Diventracker',
    description: 'Plataforma educativa especializada en Inteligencia Artificial, programación y matemáticas aplicadas.',
    longDescription: 'Sistema completo de gestión educativa con módulos de IA para análisis predictivo del rendimiento estudiantil, recomendaciones personalizadas y gamificación avanzada.',
    icon: 'ri-graduation-cap-fill',
    gradient: 'from-green-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['Python', 'FastAPI', 'AJAX', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'TREEJS',
    description: 'Aplicación web interactiva con animaciones 3D creadas con Three.JS.',
    longDescription: 'Experiencia inmersiva 3D con física en tiempo real, partículas interactivas y shaders personalizados para crear visualizaciones impactantes.',
    icon: 'ri-box-3-fill',
    gradient: 'from-blue-400 to-purple-500',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tags: ['Three.js', 'JavaScript', 'WebGL', '3D'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Entropy Evolve',
    description: 'Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software.',
    longDescription: 'Framework experimental de ML que permite a los agentes optimizar sus propios algoritmos mediante técnicas de meta-aprendizaje y evolución de arquitecturas.',
    icon: 'ri-robot-fill',
    gradient: 'from-cyan-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'AI', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Portfolio Web',
    description: 'Sitio web personal moderno con animaciones fluidas y diseño responsive.',
    longDescription: 'Portfolio interactivo construido con las últimas tecnologías web, featuring smooth scrolling, dark mode, y animaciones personalizadas.',
    icon: 'ri-global-line',
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    github: '#',
    demo: '#'
  }
];

function ProjectCard({ project, isActive }) {
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

function Modal({ project, onClose }) {
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

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToProject = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.project-card');
      if (cards[index]) {
        const card = cards[index];
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
        const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollTo),
          behavior: 'smooth'
        });
      }
      setCurrentIndex(index);
    }
  };

  // Detectar scroll y actualizar el índice activo
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const cards = container.querySelectorAll('.project-card');
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    
    // Inicializar en el primer proyecto
    handleScroll();
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  // Auto-play del carrusel
  useEffect(() => {
    if (isPaused || expandedProject) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, expandedProject]);

  const handlePrev = () => {
    setIsPaused(true); // Pausar auto-play
    const newIndex = currentIndex > 0 ? currentIndex - 1 : PROJECTS.length - 1;
    scrollToProject(newIndex);
    setTimeout(() => setIsPaused(false), 3000); // Reanudar después de 3s
  };

  const handleNext = () => {
    const newIndex = currentIndex < PROJECTS.length - 1 ? currentIndex + 1 : 0;
    scrollToProject(newIndex);
  };

  // Drag to scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true); // Pausar auto-play al interactuar
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reanudar auto-play después de 3 segundos de inactividad
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4 gradient-text">
            Mis <span className="text-cyan-500">Proyectos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Desliza para explorar mis proyectos
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:border-cyan-500/50 transition-all duration-300 hidden md:flex"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 hover:border-cyan-500/50 transition-all duration-300 hidden md:flex"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          {/* Carousel */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-8 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {PROJECTS.map((project, index) => (
              <div 
                key={project.id}
                className="snap-center flex-shrink-0 first:ml-[calc(50vw-225px)] last:mr-[calc(50vw-225px)]"
                onClick={() => setExpandedProject(project)}
              >
                <div className="project-card">
                  <ProjectCard 
                    project={project} 
                    isActive={index === currentIndex}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  scrollToProject(index);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? 'w-8 bg-cyan-500' 
                    : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-cyan-400'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {expandedProject && (
        <Modal 
          project={expandedProject} 
          onClose={() => setExpandedProject(null)} 
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}