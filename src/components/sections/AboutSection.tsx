"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileImage, GraduationCap, Award } from 'lucide-react';

import { HIGHLIGHTS, EDUCATION, CERTIFICATES } from '@/lib/constants'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function AboutSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState<'education' | 'certificates'>('education');

  return (
    <section
      ref={targetRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Columna Izquierda - Sticky Image */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative glass-strong rounded-3xl p-8 shadow-2xl animate-float overflow-hidden">
                  <div className="w-full aspect-square bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center">
                    <img src="/images/Andres.jpeg" alt="Andres Ortiz"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
                Acerca de <span className="text-cyan-500">Mí</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Andrés Ortiz<span className="text-gray-400 dark:text-gray-600"> | Bogotá, Colombia</span></h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Tecnólogo en Análisis y Desarrollo de Software con formación complementaria en Calidad del Software 
                    y Desarrollo Full Stack. Cuento con experiencia profesional participando en el ciclo completo de desarrollo, 
                    desde el análisis de requerimientos hasta la implementación, pruebas y mantenimiento de soluciones.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    He trabajado en proyectos reales para entornos empresariales, desarrollando aplicaciones, APIs, 
                    automatizaciones e integraciones con bases de datos. Me caracterizo por mi capacidad de análisis, 
                    aprendizaje rápido, adaptación y orientación al servicio, buscando comprender las 
                    necesidades del usuario y brindar soluciones funcionales, eficientes y de calidad.
                  </p>
                </div>

                {/* Highlights compactos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                  {HIGHLIGHTS.slice(0, 6).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-2 p-3 rounded-xl glass-strong hover:border-cyan-500/50 transition-all duration-300 group"
                      >
                        <div className="h-8 w-8 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 flex-shrink-0">
                          <Icon className="h-4 w-4 text-cyan-500" />
                        </div>
                        <span className="text-xs font-medium leading-tight">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tabs para Educación y Certificaciones */}
            <div className="pt-6">
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'education'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'glass hover:border-cyan-500/50'
                    }`}
                >
                  <GraduationCap size={18} />
                  Educación
                </button>
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'certificates'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'glass hover:border-cyan-500/50'
                    }`}
                >
                  <Award size={18} />
                  Certificaciones
                </button>
              </div>

              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'education' ? (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-4"
                    >
                      {EDUCATION.map((edu, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 p-5"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative space-y-3">
                            <div className="flex justify-between items-start">
                              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
                                {edu.period}
                              </span>
                              <GraduationCap size={20} className="text-cyan-500 opacity-20 group-hover:opacity-100 transition-all duration-300" />
                            </div>

                            <div className="space-y-1">
                              <h4 className="font-bold text-sm leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                {edu.degree}
                              </h4>
                              <p className="text-xs text-muted-foreground font-medium">
                                {edu.institution}
                              </p>
                              {edu.status && (
                                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold inline-block px-2 py-0.5 rounded-full bg-cyan-500/10">
                                  {edu.status}
                                </p>
                              )}
                            </div>

                            {edu.description && (
                              <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-gray-200 dark:border-gray-800">
                                {edu.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="certificates"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-4"
                    >
                      {CERTIFICATES.map((cert, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 p-5"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative space-y-3">
                            <div className="flex justify-between items-start">
                              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
                                {cert.year}
                              </span>
                              <Award size={20} className="text-cyan-500 opacity-20 group-hover:opacity-100 transition-all duration-300" />
                            </div>

                            <div className="space-y-1">
                              <h4 className="font-bold text-sm leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                {cert.title}
                              </h4>
                              <p className="text-xs text-muted-foreground font-medium">
                                {cert.institution}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {cert.topics.map((topic, topicIndex) => (
                                <span
                                  key={topicIndex}
                                  className="text-xs px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
