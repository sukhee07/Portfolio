import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdContactPage } from 'react-icons/md'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on Escape key & lock body scroll
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu when a nav link is clicked
  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">
          <span>Sukhpreet Singh</span>
          <small>Full Stack Developer</small>
        </a>

        <nav className="pill-nav desktop-nav" aria-label="Primary navigation">
          <a href="#client-work">Work</a>
          <a href="#info">Info</a>
          <a href="#skills">Skills</a>
        </nav>

        <div className="header-links desktop-nav items-center">
          <div className="relative flex flex-col items-center justify-center">
            <a
              href="https://github.com/sukhee07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group peer flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(24,21,17,0.18)] hover:bg-[#181511] hover:!border-[#181511] hover:!text-[#f8f1e7] transition-all"
            >
              <FaGithub className="text-[20px] text-[#181511] group-hover:text-[#f8f1e7] transition-colors" />
            </a>
            <span className="absolute top-full mt-2 px-3 py-1.5 bg-[#181511] text-[#f8f1e7] text-xs font-bold rounded-full opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sukhpreet-singh-037a70300/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group peer flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(24,21,17,0.18)] hover:bg-[#181511] hover:!border-[#181511] hover:!text-[#f8f1e7] transition-all"
            >
              <FaLinkedinIn className="text-[18px] text-[#181511] group-hover:text-[#f8f1e7] transition-colors" />
            </a>
            <span className="absolute top-full mt-2 px-3 py-1.5 bg-[#181511] text-[#f8f1e7] text-xs font-bold rounded-full opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <a
              href="https://docs.google.com/document/d/16U1f8tMJ3FpbKx1vTSesH0zUPENyyd97j6RkHzUrOos/edit?usp=sharing"
              aria-label="Resume"
              className="group peer flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(24,21,17,0.18)] hover:bg-[#181511] hover:!border-[#181511] hover:!text-[#f8f1e7] transition-all"
            >
              <MdContactPage className="text-[20px] text-[#181511] group-hover:text-[#f8f1e7] transition-colors" />
            </a>
            <span className="absolute top-full mt-2 px-3 py-1.5 bg-[#181511] text-[#f8f1e7] text-xs font-bold rounded-full opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Resume
            </span>
          </div>
        </div>

        {/* Hamburger button — only visible on mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </header>

      {/* Portal: renders overlay outside header so it escapes the sticky stacking context */}
      {createPortal(
        <div
          className={`mobile-overlay ${menuOpen ? 'active' : ''}`}
          onClick={handleNavClick}
          aria-hidden={!menuOpen}
        >
          <nav
            className="mobile-nav"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-links">
              <a href="#client-work" onClick={handleNavClick}>Work</a>
              <a href="#info" onClick={handleNavClick}>Info</a>
              <a href="#skills" onClick={handleNavClick}>Skills</a>
            </div>

            <div className="mobile-nav-socials items-center">
              <a
                href="https://github.com/sukhee07"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                aria-label="GitHub"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-current hover:bg-[#f8f1e7] hover:!text-[#181511] transition-all"
              >
                <FaGithub className="text-[22px] text-[#f8f1e7] group-hover:text-[#181511] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/sukhpreet-singh-037a70300/"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                aria-label="LinkedIn"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-current hover:bg-[#f8f1e7] hover:!text-[#181511] transition-all"
              >
                <FaLinkedinIn className="text-[20px] text-[#f8f1e7] group-hover:text-[#181511] transition-colors" />
              </a>
              <a
                href="https://docs.google.com/document/d/16U1f8tMJ3FpbKx1vTSesH0zUPENyyd97j6RkHzUrOos/edit?usp=sharing"
                onClick={handleNavClick}
                aria-label="Resume"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-current hover:bg-[#f8f1e7] hover:!text-[#181511] transition-all"
              >
                <MdContactPage className="text-[22px] text-[#f8f1e7] group-hover:text-[#181511] transition-colors" />
              </a>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}

export default Header