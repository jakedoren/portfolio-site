import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
            <nav id="home" className="navbar ">
                <div className="logo">
                    <a href="#home">Jacob Doren</a>
                </div>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
            </nav>     
    )
}
