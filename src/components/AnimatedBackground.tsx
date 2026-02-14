export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-animate animate-gradient"></div>
      </div>
    </div>
  )
}