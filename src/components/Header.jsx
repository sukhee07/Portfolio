function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        <span>Sukhpreet Singh</span>
        <small>MERN Stack Developer</small>
      </a>

      <nav className="pill-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#info">Info</a>
        <a href="#skills">Skills</a>
      </nav>

      <div className="header-links">
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
    </header>
  )
}

export default Header