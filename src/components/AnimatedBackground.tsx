export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 20%, rgba(34,211,238,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(168,85,247,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 85%, rgba(249,115,22,0.13) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}