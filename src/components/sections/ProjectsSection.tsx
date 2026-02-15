import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/constants";
import { Modal, ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/lib/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll(".project-card");
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
        const scrollTo = cardLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollTo),
          behavior: "smooth",
        });
      }
      setCurrentIndex(index);
    }
  };

  // Detectar scroll y actualizar el índice activo - Optimizado con throttling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number;
    const handleScroll = () => {
      if (rafId) return; // Throttle con requestAnimationFrame

      rafId = requestAnimationFrame(() => {
        const containerCenter = container.scrollLeft + container.offsetWidth / 2;
        const cards = container.querySelectorAll(".project-card");

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
          const cardElement = card as HTMLElement;
          const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== currentIndex) {
          setCurrentIndex(closestIndex);
        }
        rafId = 0;
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Inicializar en el primer proyecto
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true); // Pausar auto-play al interactuar
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
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
    <section
      ref={targetRef}
      id="proyectos"
      className={`min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
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
          {PROJECTS.length > 1 && (
            <>
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
            </>
          )}

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
                    ? "w-8 bg-cyan-500"
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-cyan-400"
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
    </section>
  );
}