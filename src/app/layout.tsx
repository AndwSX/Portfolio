import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andres Ortiz - Portfolio',
  description: 'Portfolio profesional de Andres Ortiz, estudiante de Inteligencia Artificial y desarrollador web especializado en React, TypeScript y Machine Learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}