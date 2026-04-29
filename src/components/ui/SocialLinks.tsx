'use client'

import { SOCIAL_LINKS } from '@/lib/constants'

interface SocialLinksProps {
  showLabel?: boolean
}

export default function SocialLinks({ showLabel = true }: SocialLinksProps) {
  return (
    <div className="space-y-3">
      {showLabel && (
        <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          Sígueme
        </p>
      )}
      <div className="flex gap-4">
        {SOCIAL_LINKS.slice(0, 3).map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.url}
              target='_blank'
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover:text-cyan-500"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  )
}