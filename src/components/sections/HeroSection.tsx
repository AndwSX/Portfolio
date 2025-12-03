'use client'

import SocialLinks from '@/components/ui/SocialLinks'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                Hola, soy <span className="gradient-text">Andrés</span>
              </h1>
              <div className="glass inline-block px-6 py-3 rounded-2xl">
                <p className="text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400">
                  Inteligencia Artificial |
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Soy estudiante de <span className="font-semibold text-gray-900 dark:text-gray-100">Inteligencia Artificial</span> y desarrollador
              web. Me apasiona crear, aprender y llevar mis ideas a la
              realidad a través de la programación y creatividad.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="glass-strong px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2">
                <i className="ri-arrow-right-line"></i>
                Contratar
              </button>
              <button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2">
                <i className="ri-download-line"></i>
                Descargar CV
              </button>
            </div>
            
            <SocialLinks />
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative glass-strong rounded-3xl p-8 shadow-2xl animate-float overflow-hidden">
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                <i className="ri-code-s-slash-line text-9xl text-cyan-500/30"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}