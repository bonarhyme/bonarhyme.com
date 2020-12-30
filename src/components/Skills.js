import React from "react"
import { skills } from "../data"

const Skill = () => {
  return (
    <section className="skills-container">
      <ul className="skill-body">
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>
        })}
      </ul>
    </section>
  )
}

export default Skill
