import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link to="/" title="Home page">
          <button type="button" className="btn">
            Home
          </button>
        </Link>
        <Link to="/about" title="about page">
          <button type="button" className="btn">
            About
          </button>
        </Link>
        <Link to="/contact" title="title page">
          <button type="button" className="btn">
            Contact
          </button>
        </Link>
        <Link to="/learn" title="Learn web development from me">
          <button type="button" className="btn">
            Learn
          </button>
        </Link>
        <a href="https://blog.bonarhyme.com" title="My blog">
          <button type="button" className="btn">
            Blog
          </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
