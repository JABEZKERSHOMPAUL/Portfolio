import { Link } from "react-router-dom"
import "./../../components/aboutContent/AboutContent.css"
import React1 from "./../../image/newpic.jpeg"


import React from 'react'

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>HI, I'm JABEZ KERSHOM PAUL</h1>
        <p>Hello, I am a highly motivated and skilled engineering graduate looking for an entry-level position as a software engineer. Strong in design and integration with intuitive problem-solving skills. Passionate to contribute ideas and learn new things. I am available for any kind of job opportunity that suits my interests.</p>
        <Link to='/contact'>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent