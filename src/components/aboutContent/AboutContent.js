import { Link } from "react-router-dom"
import "./../../components/aboutContent/AboutContent.css"
import React1 from "./../../image/react1.jpg"
import React2 from "./../../image/react2.webp"

import React from 'react'

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>HI, I'm JABEZ KERSHOM PAUL</h1>
        <p>I'm MERN Full-stack Developer. I create responsive Web application, including the front-end, back-end, and database layers.</p>
        <Link to='/contact'>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true"/>
          </div>

          <div className="img-stack buttom">
            <img src={React2} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent