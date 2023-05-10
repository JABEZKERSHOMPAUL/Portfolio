import React from 'react'
import "./../footer/Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,GoMarkGithub } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='left'>

                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>1/879,6th North Street, </p>
                            <p>Bethal Nagar, Injambakkam, Ch-115</p>
                        </div>
                    </div>

                    <div className='d-flex'>
                     <a href='https://api.whatsapp.com/send/?phone=7358088340&text&type=phone_number&app_absent=0 ' target='_blank'><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} /> 7358088340</a>
                     </div><br/>

                    <div className='email'>
                        <h4> <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            jabpaul20@gmail.com</h4>

                    </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>This is JABEZ,</p>
                    <p> Web Developer [MERN stack]</p>
                    <p> I enjoy to discuss about My Project. </p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                       
                        <a href="https://www.linkedin.com/in/jabez-kershom-paul-370603223" target="_blank"><FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }}/></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer