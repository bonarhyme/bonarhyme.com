import React from "react"

import { projects } from "../data"

const Projects = () => {
  return (
    <section className="projects-container">
      {projects.map((project) => {
        const { id, name, image, link, source, tech } = project
        return (
          <div key={id} className="single-project">
            <div className="project-image-container">
              <img
                src={image}
                alt={name}
                width="100%"
                height="100%"
                className="project-image"
              />
            </div>
            <div className="project-texts">
              <h3>{name}</h3>
              <a href={link} rel="noopener noreferrer" target="_blank">
                <button className="btn">Preview</button>
              </a>
              <a href={source} rel="noopener noreferrer" target="_blank">
                <button className="btn">Source Code</button>
              </a>
              <ul className="techs">
                {tech.map((item, index) => {
                  return (
                    <li className="tech" key={index}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Projects
