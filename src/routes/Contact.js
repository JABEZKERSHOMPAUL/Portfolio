import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Heroimg2 from '../components/heroImg2/HeroImg2'
import Footer from '../components/footer/Footer'
import Form from './../components/form/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact