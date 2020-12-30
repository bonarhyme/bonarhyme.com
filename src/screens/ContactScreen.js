import React from "react"
import Meta from "../components/Meta"

const ContactScreen = () => {
  return (
    <>
      <Meta
        title="Contact Bonaventure"
        description="Contact Bonaventure Chukwudi Onuorah"
      />
      <main className="contact-screen">
        <p>Are you looking forward to grow your business online?</p>
        <p>Or you want a personal website or portfolio like mine?</p>
        <p>
          Or you want a place to showcase your works, resume/cv and share your
          dreams?
        </p>
        <p>
          Or you are a blogger, writer or freelancer and you want online
          visibility?
        </p>
        <p>Or you want to learn Web development?</p>

        <p>The good news is that I can help you achieve that.</p>
        <div className="reach-me">
          <p>Reach me on any of the icon platform below.</p>
        </div>
      </main>
    </>
  )
}

export default ContactScreen
