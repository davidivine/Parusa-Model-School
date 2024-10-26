import React from 'react'
import Navbar from '../Navbar'
import Hero2 from '../Hero2'
import ProjectContent from '../ProjectContent'
import Footer from '../Footer'


const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading={"Project"} text={"We have so many projects and they are available on our website"}/>
      <ProjectContent />
      <Footer />
      
    </div>
  )
}

export default Project