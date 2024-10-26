import React from 'react'
import Navbar from '../Navbar'
import Hero2 from '../Hero2'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading={"Contact Us"} text={"Contact us today on 09029998694, 08032255768"}/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact