"use client";

import SkillCard from '@/components/ui/SkillCard'
import { SKILLS } from '@/lib/constants'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


export default function SkillsSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section
      ref={targetRef}
      id="skills"
      className={`min-h-screen flex items-center justify-center px-4 py-80 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Columna Izquierda - Sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-60 lg:bottom-60 md:mb-60 space-y-8">
              {/* Header con animación */}
              <div className="space-y-6">
                <div className="inline-block">
                  <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text animate-fade-in">
                    Mi Stack <span className="text-cyan-500">Tecnológico</span>
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 animate-slide-right"></div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Tecnologías y herramientas con las que trabajo para construir soluciones backend robustas y escalables.
                </p>
              </div>

              {/* Decorative dots */}
              <div className="hidden lg:flex gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Skills por Categoría */}
          <div className="lg:col-span-7 space-y-12">
            {Object.entries(SKILLS).map(([category, skills], catIndex) => (
              <div
                key={category}
                className="space-y-6 animate-fade-in"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                {/* Category Header con efecto */}
                <div className="group flex items-center gap-3">
                  <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase group-hover:text-cyan-500 transition-colors duration-300">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent"></div>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-6 md:gap-8">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={catIndex * 10 + index}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Final decoration */}
            <div className="pt-8 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}