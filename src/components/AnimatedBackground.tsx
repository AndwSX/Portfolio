export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-black"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-animate animate-gradient"></div>
      </div>
    </div>
  )
}