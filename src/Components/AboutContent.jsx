import React from 'react'
import { NavLink } from 'react-router-dom'
import parusa1 from "./Images/parusa1.jpeg"
import parusa2 from "./Images/parusa2.jpeg"
import "./AboutContent.css"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About School</h1>
            <p>This is the best international school in Nigeria</p>
            <NavLink to={"About"}>About us</NavLink>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stacktop'> 
                    <img src= {parusa2} alt="school-image" className='img'/>
                </div>
                <div className='img-stackbuttom'>
                    <img src= {parusa1} alt="school-image" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent