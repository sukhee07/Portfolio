import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="w-full px-6 py-10 flex flex-col items-center bg-transparent mt-8">
      <h3 className="text-[#181511] font-bold tracking-[0.35em] text-[12px] md:text-sm uppercase mb-8">
        Drop a line
      </h3>
      
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
        <SocialLink 
          href="https://linkedin.com/in/" 
          icon={<FaLinkedinIn />} 
          ariaLabel="LinkedIn" 
          hoverBg="bg-[#0a66c2]"
          hoverBorder="hover:border-[#0a66c2]"
        />
        <SocialLink 
          href="https://github.com/sukhpreetsingh1689" 
          icon={<FaGithub />} 
          ariaLabel="GitHub" 
          hoverBg="bg-[#181511]"
          hoverBorder="hover:border-[#181511]"
        />
        <SocialLink 
          href="https://twitter.com/" 
          icon={<FaXTwitter />} 
          ariaLabel="X (Twitter)" 
          hoverBg="bg-[#000000]"
          hoverBorder="hover:border-[#000000]"
        />
        <SocialLink 
          href="https://wa.me/917051179166" 
          icon={<FaWhatsapp />} 
          ariaLabel="WhatsApp" 
          hoverBg="bg-[#25D366]"
          hoverBorder="hover:border-[#25D366]"
        />
        <SocialLink 
          href="mailto:sukhpreetsingh1689@gmail.com" 
          icon={<FaEnvelope />} 
          ariaLabel="Email" 
          hoverBg="bg-[#EA4335]"
          hoverBorder="hover:border-[#EA4335]"
        />
      </div>

      <div className="w-full max-w-[1200px] border-t border-[rgba(24,21,17,0.08)] pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[#756e63]">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
          © 2026 Sukhpreet Singh
        </p>
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
          Built in India with love <FaHeart className="text-[#ff4757] text-sm inline-block animate-bounce" style={{animationDuration: '2s'}} />
        </p>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, ariaLabel, hoverBg, hoverBorder }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group relative flex items-center justify-center w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-full border border-[rgba(24,21,17,0.12)] bg-transparent text-[#181511] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(24,21,17,0.08)] ${hoverBorder} overflow-hidden`}
    >
      {/* Background fill animation */}
      <div className={`absolute inset-0 ${hoverBg} rounded-full scale-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 origin-center`}></div>
      
      {/* Icon */}
      <span className="relative z-10 text-[24px] md:text-[28px] transition-colors duration-500 group-hover:text-white">
        {icon}
      </span>
    </a>
  )
}

export default Footer
