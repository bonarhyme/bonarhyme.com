import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { CgMail } from "react-icons/cg"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-center">
          <li>
            <a
              href="http://github.com/bonarhyme"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com/bonarhyme"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/bonarhyme/in/bonaventure-onuorah-5b15ba1ba"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:bonarhyme@gmail.com" rel="noopener noreferrer">
              <CgMail />
            </a>
          </li>
          <li>
            <a href="tel:+2348147546191" rel="noopener noreferrer">
              <AiFillPhone />
            </a>
          </li>
          <li className="copy">&copy; {year} Bonarhyme</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
