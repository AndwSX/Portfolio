'use client'

interface LoadingScreenProps {
  isVisible: boolean
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black ${
        !isVisible ? 'loading-hide' : ''
      }`}
    >
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide loading-text">
          <span className="font-semibold">Andrés Ortiz</span>
          <span className="opacity-50 ml-3">Portfolio</span>
        </h1>
      </div>
    </div>
  )
}