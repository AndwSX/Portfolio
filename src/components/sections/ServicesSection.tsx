'use client'

import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/lib/constants'

export default function ServicesSection() {
  return (
    <section id="servicios" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Mis <span className="text-cyan-500">Servicios</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            ¿En qué puedo ayudarte?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold font-display">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Estoy disponible para colaborar en proyectos interesantes. ¡Hablemos!
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-3 mx-auto">
              <i className="ri-mail-line text-xl"></i>
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}