function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 sm:py-12 my-10 sm:my-20 bg-[#181511] select-none flex flex-col gap-4 sm:gap-6">
      <div className="animate-marquee flex gap-8 sm:gap-12 text-[#f8f1e7] font-black text-4xl sm:text-6xl uppercase tracking-tight">
        <span>React.js • Node.js • TypeScript • MongoDB • Tailwind CSS • Express.js • PostgreSQL • Python • Figma •</span>
        <span>React.js • Node.js • TypeScript • MongoDB • Tailwind CSS • Express.js • PostgreSQL • Python • Figma •</span>
        <span>React.js • Node.js • TypeScript • MongoDB • Tailwind CSS • Express.js • PostgreSQL • Python • Figma •</span>
      </div>
      <div className="animate-marquee-reverse flex gap-8 sm:gap-12 text-[#f8f1e7] font-black text-4xl sm:text-6xl uppercase tracking-tight">
        <span>Available for Freelance • Full Stack Developer • Open for Roles •</span>
        <span>Available for Freelance • Full Stack Developer • Open for Roles •</span>
        <span>Available for Freelance • Full Stack Developer • Open for Roles •</span>
      </div>
    </div>
  )
}

export default Marquee
