'use client'

import { Service } from '@/lib/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div 
      className="group glass-strong rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-scale-in"
      style={{ animationDelay: service.delay }}
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <i className={`${service.icon} text-3xl text-white`}></i>
        </div>
        <h3 className="text-2xl font-bold font-display mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}