import React from 'react'
import './../heroImg1/HeroImg.css'
import IntroImg from './../../image/intro-bg.jpg'
import { Link } from 'react-router-dom'
import arrow1 from '../../image/giphy.gif'

function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="IntroImg " />

      </div>
      <div className='content'>
        <h2>Hello, I AM </h2>
        <h1 className='head'>Jabez <br/>Kershom  Paul T</h1>
        <h1 className='typewriter'>Full Stack Developer.</h1>
        <div>
        <img src={arrow1} height={'50px'} width={'50px'}/><br/>
          
        <a href='https://drive.google.com/file/d/1kjAAQJg-UYAQAXngRAAl0YUpMtZk-J3u/view?usp=sharing' target='_blank'><button className='btn btn-waring fs-1'>GET RESUME</button></a>
         
          
        </div><br/>
        
        <div className=''>
          <Link to='/project' className='btn btn-warning '>Projects</Link>
          <Link to='/contact' className='btn btn-warning  '>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg