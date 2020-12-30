import React from "react"
import Meta from "../components/Meta"

const AboutScreen = () => {
  return (
    <>
      <Meta title="About Bonaventure" description="Bonaventure Autobiography" />
      <main className="about-container">
        <div className="birth">
          <h2>Birth and Childhood</h2>
          <p>
            I was Born Bonaventure Chukwudi to my wonderful parents; Chief
            Joseph and Mrs. Susan Madukolu. Though there is a disparity in our
            last names, they are my biological and legal parents. I was born on
            7th october, 1998 and raised in Kamba; a remote but developing
            village in the northern part of Nigeria - in a state known as Kebbi
            state. I am the second child of my parents out of the seven children
            they had together.
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>
            I attended Unity Nursery and primary school Kamba for my primary and
            basic education, and for my secondary education I attended Sacred
            Heart College, Nteje and eventually went to Federal Polytechnic
            Nekede, owerri (FPNO) where I majored in Chemical Engineering.
          </p>
        </div>
        <div className="coding">
          <h2>How I discovered Programming</h2>
          <p>
            During my study in FPNO, I bacame fascinated with the number of
            things you could do with a computer after I took an introductory
            course on computer programming algorithm where the lecturer
            introduced us to QBASIC, but because of my tight schedules and the
            fact that I didn't know where to search from, I didn't delve into
            programming until march 2020, when I made up my mind to learn Web
            development and App development.{" "}
          </p>
        </div>
        <div className="learning">
          <h2>How did you learn coding?</h2>
          <p>
            In march 2020, I discovered{" "}
            <a
              href="https://freecodecamp.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              Freecodecamp{" "}
            </a>
            , an online learning platform. They served as my stepping stone to
            knowing what Web development was all about.
          </p>
        </div>
        <div className="challenges">
          <h2>The challenges I passed through</h2>
          <p>
            The first and foremost challenge was the device to use. Contrary to
            what many people say about being able to learn coding with a mobile
            phone, it is quite hectic and will not really help one go far. I
            started learning with a phone and that limited the rate at which I
            learnt web development. it was only until april that I got an old
            refurbished 32-bit dell latitude that gave me hell and still giving
            me hell since I havent't really gotten another one yet. The next is
            power supply (I live in Nigeria, so what did I expect??). The last
            but not the least was the cost of bandwidth (It is costly as hell in
            Nigeria.){" "}
          </p>
        </div>
        <div className="desire">
          <h2>My desire</h2>
          <p>
            I want to build an empire to help people, so I can fulfil my heart
            desires of making the world a better place with programming.
          </p>
        </div>
      </main>
    </>
  )
}

export default AboutScreen
