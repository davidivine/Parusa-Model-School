import React from 'react'
import school from './Images/school.jpeg'
import { Link } from 'react-router-dom'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src= {school} alt="SCHOOL IMAGE" className='bgimg'/>
        </div>

        <div className='content'>
            <p>Excellence is our goal</p>
            <h1>PARUSA MODEL SCHOOL</h1>

            <div>
                <Link to="/project">
                    <button className='btn'>Project</button>
                </Link>

                <Link to="/contact">
                    <button className='btn btn-light'>Contact</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero