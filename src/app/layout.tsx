import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Andres Ortiz - Portfolio',
  description: 'Portfolio de Andrés Ortiz - Desarrollador de Software especializado en Python, FastAPI, React y PostgreSQL. Experiencia en automatización de procesos empresariales y desarrollo de aplicaciones web completas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={outfit.variable}>
      <head>
      </head>
      <body className="font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}