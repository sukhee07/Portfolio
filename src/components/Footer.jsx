import { FaEnvelope, FaWhatsapp } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Have a project or opportunity?</h2>
      </div>
      <div className="flex items-center gap-4 mt-6 md:mt-0">
        <div className="relative flex flex-col items-center justify-center">
          <a
            href="mailto:sukhpreetsingh1689@gmail.com"
            className="group peer flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(248,241,231,0.2)] hover:bg-[#f8f1e7] hover:!text-[#181511] transition-all"
            aria-label="Email"
          >
            <FaEnvelope className="text-[20px] text-[#f8f1e7] group-hover:text-[#181511] transition-colors" />
          </a>
          <span className="absolute bottom-full mb-3 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 px-3 py-1.5 bg-[#f8f1e7] text-[#181511] text-xs font-bold rounded-full opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            sukhpreetsingh1689@gmail.com
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <a
            href="https://wa.me/917051179166"
            className="group peer flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(248,241,231,0.2)] hover:bg-[#f8f1e7] hover:!text-[#181511] transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-[22px] text-[#f8f1e7] group-hover:text-[#181511] transition-colors" />
          </a>
          <span className="absolute bottom-full mb-3 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 px-3 py-1.5 bg-[#f8f1e7] text-[#181511] text-xs font-bold rounded-full opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            +91 7051179166
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
