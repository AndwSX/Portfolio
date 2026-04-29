'use client'

import { useTheme } from '@/hooks/useTheme'
import { useActiveSection, scrollToSection } from '@/hooks/useActiveSection'
import { NAV_ITEMS } from '@/lib/constants'
import { Sun, Moon } from 'lucide-react'

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme()
  const activeSection = useActiveSection()

  return (
    <nav className="fixed sm:top-2 md:top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass-strong rounded-full shadow-lg px-2 py-2 flex items-center gap-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeSection === item.id
                ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <item.icon size={16} />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
        
        <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-1"></div>
        
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}