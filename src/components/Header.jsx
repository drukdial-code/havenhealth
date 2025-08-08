import { Link } from 'react-router-dom'
import Button from './Button'

// Scroll to section if on home page
  const handleNavClick = (e, sectionId) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault()
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

function Header() {
  return (
    <header className="header">
      {/* <div className="logo">Havan Home Health</div> */}
      <div className="logo-container">
        <img 
          className="logo-img animate__animated animate__heartBeat"
          src="imgs/logo.png"
          alt="Havan Home Health Logo"
        />
        <span className="logo-text">Havan Home Health</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        
        <Link to="/#about"
        onClick={(e) => handleNavClick(e, 'about-section')}>About
        </Link>
        
        <Link to="/#services"
          onClick={e => handleNavClick(e, 'services-section')}>Services
        </Link>

        <Link to="/contact-us">
          Contact Us
          {/* Optional small icon */}
          <span style={{ marginLeft: '8px' }}>✉️</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header