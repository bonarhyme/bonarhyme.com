import React from "react"
import Bonarhyme from "../images/me.jpg"
import { FaAngleDoubleDown } from "react-icons/fa"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <main className="home-screen">
      <div className="text">
        <p className="welcome">Hello, Welcome to my portfolio.</p>
        <div className="home-container">
          <figure className="image-container">
            <img
              className="bona-image"
              src={Bonarhyme}
              alt="Bonaventure Chukwudi Onuorah"
              width="100%"
              height="100%"
            />
          </figure>
        </div>
        <p className="name">Bonaventure Chukwudi Onuorah</p>
        <span className="nick">
          <i>Bonarhyme</i>
        </span>
        <span className="typewriter">
          <span className="title">
            <i>Fullstack Web Developer</i>
          </span>
        </span>
        <div className="down">
          <a href="#projects">
            <FaAngleDoubleDown className="downn" />
          </a>
          <a href="#projects">
            <FaAngleDoubleDown className="downn" />
          </a>
        </div>
      </div>

      <div className="projects">
        <h2 id="projects">Projects</h2>
        <Projects />
      </div>
      <div id="skills" className="skills">
        <h2>Skills</h2>
        <Skills />
      </div>
    </main>
  )
}

export default Home
