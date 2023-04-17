import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Heroimg2 from '../components/heroImg2/HeroImg2'
import Work from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
