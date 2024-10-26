import { FaSchool } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const [color, setColor] = useState(false)
    const colorChange = () => {
        if(window.scrollY > 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link>
            <h1>Parusa <FaSchool /></h1>
        </Link>

        <ul className= {toggle? "navmenu" : "navmenu active"}>
            <li>
                <Link to = "/">Home</Link>
            </li>

            <li>
                <Link to = "/About" >About</Link>
            </li>

            <li>
                <Link to = "/Contact">Contact</Link>
            </li>

            <li>
                <Link to = "/Project">Project</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleToggle}>
            {toggle ? (<FaTimes size = {25} style={{color: "white"}}/>) : (<FaBars size = {25} style={{color: "white"}}/>)}
        </div>

        
    </div>
  )
}

export default Navbar