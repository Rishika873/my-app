import React from "react"
import "../stylings/navbar.css"
import myImage from "../assets/Images/Logo.svg";
const Navbar = ()=>
{
    return(
        
        <div className="navbar">
            <div className="logo">
            <img src={myImage} alt="Logo" className="logo-image" /> 
            </div>

            <div className="navbar-content">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button type="submit">Subscribe</button>
            </div>
        </div>
    
    )
}
export default Navbar