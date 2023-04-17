import React from 'react'
import './../heroImg1/HeroImg.css'
import IntroImg from './../../image/intro-bg.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="IntroImg " />

      </div>
      <div className='content'>
        <p>HI, I'M A WEBDEVELOPER </p>
        <h1>React Developer</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg