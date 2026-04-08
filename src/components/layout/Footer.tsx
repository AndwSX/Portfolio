'use client'

import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-black">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display mb-2">Andres Ortiz</h3>
            <p className="text-gray-600 dark:text-gray-400">Desarrollador de Software | Tecnólogo ADSO</p>
          </div>

          <div className="flex gap-4">
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Andres Ortiz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}