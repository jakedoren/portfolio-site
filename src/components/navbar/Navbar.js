import React, {useState} from 'react'
import './Navbar.css'
import {Link, animateScroll as scroll} from 'react-scroll'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)

    const toggleScroll = () => {
        scroll.scrollToTop();
    }

    const changeNavbg = () => {
        if(window.scrollY >=64) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeNavbg)
    

    return (
            <nav id="home" className={navbar ? "navbar sticky active" : "navbar sticky"}>
                <div className="nav-container">
                    <div className="logo">
                    <Link spy={true} smooth={true} duration={500} onClick={toggleScroll} style={{cursor: "pointer"}} className={navbar ? "white" : null}  >Jacob Doren</Link>
                </div >
                    <ul>
                        <li>
                            <Link spy={true} smooth={true} duration={500} to="projects" offset={-64} className={navbar ? "white" : null}>Projects</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={500} offset={-64} to="about" className={navbar ? "white" : null}>About</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={500} offset={-64} to="contact" className={navbar ? "white" : null}> Contact </Link>
                        </li>
                    </ul>
                </div>
            </nav>     
    )
}
