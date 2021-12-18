import { NavLink } from "react-router-dom"
import "./header.scss"

import React from 'react'

export default function Header({menuOpen, setMenuOpen}) {
    return (
        <div className="header">

            <div className="wrapper">
                <div className="left">
                    <div className="logo">WUWWUG</div> 
                </div>

                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                   
                        <img src="assets/images/starlogoSmall.png" alt="star logo to open menu" />
                </div>

            </div>
            
            <nav className= 'navWrapper'>
            <NavLink to="/stash">STASH</NavLink> 
            <NavLink to="/">FIND</NavLink>
            </nav>
        
        </div>
    )
}
