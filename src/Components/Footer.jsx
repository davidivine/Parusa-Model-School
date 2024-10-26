import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer last-f'>
        <div className='address'>
            <div className='add-line'>
                <FaHome />
                <p>12, Palmgroove Avenue R/S Oyigbo</p>
            </div>
            <div className='add-line'>
                <FaPhone />
                <p>0902998684</p>
            </div>
            <div className='add-line'>
                <IoMdMail />
                <p>parusamodelschool@gmail.com</p>
            </div>
        </div>

        <div className='footer-about'>
            <h2>About Parusa Model School</h2>
            <p>Parusa is a school that is built for excellence and the creating of future leader </p>

            <div className='footer-icon'>
                <FaFacebook size={30} style={{color: "white"}}/>
                <FaInstagram size={30} style={{color: "white"}} className='instagram'/>
                <BsWhatsapp size={30} style={{color: "white"}}/>
                <FaTiktok size={30} style={{color: "white"}} className='tiktok'/>
            </div>
        </div>
    </div>
  )
}

export default Footer