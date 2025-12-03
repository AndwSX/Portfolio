'use client'

import { SKILLS } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section id="acerca" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
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
                  Tecnólogo en formación del programa ADSO del SENA, próximo a finalizar mi etapa práctica.
                   Apasionado por la programación, el desarrollo web y la creación de soluciones que integran lógica, datos y funcionalidad.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <i className="ri-graduation-cap-line text-cyan-500"></i>
                  Educación
                </h4>
                <div>
                  <p className="font-medium">Universidad Autónoma del Estado de Morelos (UAEM)</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Licenciatura en Inteligencia Artificial</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Actualmente estudiando</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <i className="ri-briefcase-line text-cyan-500"></i>
                  Experiencia
                </h4>
                <div>
                  <p className="font-medium">Asistente en Investigación - UAEM CINC Morelos</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Proyectos en Ciencia de Datos y su aplicación en series de Tiempo (EEG, MEG, fMRI, Ritmo Cardíaco)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2025 - Actualmente</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <i className="ri-code-box-line text-cyan-500"></i>
                  Habilidades Técnicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}