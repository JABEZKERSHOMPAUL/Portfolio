import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Heroimg2 from '../components/heroImg2/HeroImg2'
import AboutContent from '../components/aboutContent/AboutContent'

function About() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="I'm A MERN-stack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About