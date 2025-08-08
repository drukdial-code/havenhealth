import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Resources</Link>
      </nav>
    </footer>
  )
}

export default Footer