'use client'

import { useTheme } from '@/hooks/useTheme'
import { useActiveSection, scrollToSection } from '@/hooks/useActiveSection'
import { NAV_ITEMS } from '@/lib/constants'
import { Sun, Moon } from 'lucide-react'

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme()
  const activeSection = useActiveSection()

  return (
    <nav className="fixed top-3 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in max-w-[95vw] sm:max-w-none">
      <div className="glass-strong rounded-full shadow-lg px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-btn p-2.5 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeSection === item.id
                ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={item.label}
          >
            <item.icon size={16} />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
        
        <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-700 mx-0.5 sm:mx-1"></div>
        
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-2.5 rounded-full text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex-shrink-0"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}