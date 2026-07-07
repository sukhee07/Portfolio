import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
          <a href="#work">Work</a>
          <a href="#info">Info</a>
          <a href="#skills">Skills</a>
        </nav>

        <div className="header-links desktop-nav">
          <a href="https://github.com/sukhee07" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sukhpreet-singh-037a70300/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://docs.google.com/document/d/16U1f8tMJ3FpbKx1vTSesH0zUPENyyd97j6RkHzUrOos/edit?usp=sharing">
            Resume
          </a>
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
              <a href="#work" onClick={handleNavClick}>Work</a>
              <a href="#info" onClick={handleNavClick}>Info</a>
              <a href="#skills" onClick={handleNavClick}>Skills</a>
            </div>

            <div className="mobile-nav-socials">
              <a href="https://github.com/sukhee07" target="_blank" rel="noreferrer" onClick={handleNavClick}>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sukhpreet-singh-037a70300/"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
              >
                LinkedIn
              </a>
              <a
                href="https://docs.google.com/document/d/16U1f8tMJ3FpbKx1vTSesH0zUPENyyd97j6RkHzUrOos/edit?usp=sharing"
                onClick={handleNavClick}
              >
                Resume
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