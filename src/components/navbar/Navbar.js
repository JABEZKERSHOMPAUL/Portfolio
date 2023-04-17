import React, { useState } from 'react'
import './../navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


function Navbar() {

  const [click, setclick] = useState(false)
  const [color,setcolor]=useState(false)
  const handleclick = () => {
    setclick(!click)
  }
  const  changeColor=()=>{
    if(window.scrollY >=100){
      setcolor(true);
    }else{setcolor(false)} 
  }

  window.addEventListener("scroll",changeColor)




  return (
    <div className={color ? 'header header-bg':'header'}>
      <Link to={'/'}>
        <h1>Portfolio</h1></Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to='/contact'>Contacts</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}
        
      </div>


    </div>
  )
}

export default Navbar