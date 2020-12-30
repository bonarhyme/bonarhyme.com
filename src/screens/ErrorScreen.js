import React from "react"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

const ErrorScreen = () => {
  return (
    <section className="error-screen">
      <div className="error-container">
        <div className="error-search">
          <BsSearch />
        </div>
        <div className="error-text">
          The page You are looking for does not exist!
        </div>
        <Link to="/" className="go-home">
          <button>Go Back Home</button>
        </Link>
      </div>
    </section>
  )
}

export default ErrorScreen
