import React from 'react'
import Navbar from '../Navbar'
import Hero2 from '../Hero2'
import AboutContent from '../AboutContent'
import Footer from '../Footer'


const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading={"About"} text={"We are the best academic institute for Nigeria"}/>
      <AboutContent />
      <Footer />
      
    </div>
  )
}

export default About