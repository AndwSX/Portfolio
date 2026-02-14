import { useState } from 'react';

import { EXPERIENCES } from "@/lib/constants";
import { ExperienceTimeline } from "@/components/ui/ExperienceCard";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


export default function ExperienceSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={targetRef}
      id="experiencia"
      className={`min-h-screen flex items-center justify-center px-4 pb-24 pt-80 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text">
            Mi <span className="text-cyan-500">Trayectoria</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Experiencia profesional y logros destacados
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceTimeline
              key={experience.id}
              experience={experience}
              index={index}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-6 text-center group hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              5+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
          </div>

          <div className="glass-strong rounded-2xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos completados</div>
          </div>

          <div className="glass-strong rounded-2xl p-6 text-center group hover:border-green-500/50 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</div>
          </div>

          <div className="glass-strong rounded-2xl p-6 text-center group hover:border-orange-500/50 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
              <i className="ri-briefcase-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display">¿Buscas talento?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Estoy abierto a nuevas oportunidades y colaboraciones interesantes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2">
                <i className="ri-download-line"></i>
                Descargar CV
              </button>
              <button className="glass px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 flex items-center gap-2">
                <i className="ri-mail-line"></i>
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}