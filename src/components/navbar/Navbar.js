import React, {useState} from 'react'
import './Navbar.css'
import {Link, animateScroll as scroll} from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'


export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [modal, setModal] = useState(false);
    const [modalBtn, setModalBtn] = useState(false)

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

    const handleModal = () => {
        setModal(!modal)
    }

    window.addEventListener("scroll", changeNavbg)
    

    return (
            <nav id="home" className={navbar ? "navbar sticky active" : "navbar sticky"}>
                <div className="nav-container">
                    <div className="logo">
                    <Link spy={true} smooth={true} duration={500} onClick={toggleScroll} style={{cursor: "pointer"}} className={navbar ? "white" : null}  >Jacob Doren</Link>
                </div>
                <div className="okay">
                    <div className="burger">
                        <ul>
                            {modal ? <AiFillCloseCircle onClick={handleModal} style={{cursor: "pointer", fontSize: "2rem", color: navbar ? "white" : null, zIndex: "5"}} value={{style: {color: "red"}}} />  : <GiHamburgerMenu onClick={handleModal} style={{fontSize: "1.5rem", cursor: "pointer"}} className={navbar ? "white" : null}/> }
                            <li style={{listStyle:"none"}}>
                            {modal ? 
                            <ul className="ddl">
                                <div className="ddl-contain">
                                 <li><Link className="ddl-link" spy={true} smooth={true} duration={500} to="project-section" offset={-64} >Projects</Link></li>
                                <li><Link className="ddl-link" spy={true} smooth={true} duration={500} to="about" offset={-64} >About</Link></li>
                                <li><Link className="ddl-link" spy={true} smooth={true} duration={500} to="contact" offset={-64} >Contact</Link></li>
                                </div>
                                
                            </ul> : null}
                        </li>
                        </ul>
                    </div>
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
                    
                </div>
            </nav>     
    )
}
