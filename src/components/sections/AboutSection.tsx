"use client";

import { HIGHLIGHTS, EDUCATION } from '@/lib/constants'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function AboutSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section
      ref={targetRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative glass-strong rounded-3xl p-8 shadow-2xl animate-float overflow-hidden">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center">
                <i className="ri-terminal-box-line text-9xl text-blue-500/30"></i>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold font-display">
              Acerca de <span className="text-cyan-500">Mí</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Andres Ortiz</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tecnólogo en formación del programa ADSO del SENA, próximo a
                  finalizar mi etapa práctica. Apasionado por la programación,
                  el desarrollo web y la creación de soluciones que integran
                  lógica, datos y funcionalidad.
                </p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                  {HIGHLIGHTS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-1 group cursor-pointer"
                      >
                        <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-5 w-5 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="font-semibold text-sm group-hover:text-cyan-500 transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <h4 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <i className="ri-graduation-cap-line text-cyan-500"></i>
                Educación
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {EDUCATION.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
                  >
                    {/* Efecto de brillo animado */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Línea decorativa superior */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-6 space-y-4">
                      {/* Badge del periodo */}
                      <div className="flex justify-center">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-xs tracking-wide group-hover:scale-105 transition-transform duration-300">
                          {edu.period}
                        </span>
                      </div>

                      {/* Contenido principal */}
                      <div className="space-y-2 text-center">
                        <h4 className="font-bold text-base leading-tight min-h-[2.5rem] flex items-center justify-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                          {edu.institution}
                        </p>
                        {edu.status && (
                          <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold pt-1 inline-block px-3 py-1 rounded-full bg-cyan-500/10">
                            {edu.status}
                          </p>
                        )}
                      </div>

                      {/* Descripción */}
                      {edu.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-gray-200 dark:border-gray-800">
                          {edu.description}
                        </p>
                      )}
                    </div>

                    {/* Decoración esquina con ícono */}
                    <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <i className="ri-graduation-cap-line text-2xl text-cyan-500"></i>
                    </div>

                    {/* Efecto de esquina inferior */}
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-tr-full transform -translate-x-10 translate-y-10 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
