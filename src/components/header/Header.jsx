import "./header.scss"

import React from 'react'

export default function header({menuOpen, setMenuOpen}) {
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

        </div>
    )
}
