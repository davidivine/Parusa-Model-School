import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">FullName</label>
            <input type="text" />

            <label htmlFor="">EmailAddress</label>
            <input type="email" />

            <label htmlFor="">PhoneNumber</label>
            <input type="text" />

            <label htmlFor="">HomeAddress</label>
            <input type="text" />

            <label htmlFor="">Country</label>
            <input type="text" />

            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='type your message here...'></textarea>

            <input type="submit" value="Submit" className='submit'/>


        </form>
    </div>
  )
}

export default ContactForm