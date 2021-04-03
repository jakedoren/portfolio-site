import React from 'react'
import './Contact.css'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
    return (
        <div>
            <div name="contact" className="contact-container">
                <div className="contact-left containerbox">
                    <div className="left-contain">
                        <h1>Let's Work Together!</h1>
                    <p>Have a project you would like to discuss?</p>
                    <h1>Contact me.</h1>
                    </div> 
                </div>
                <div className="contact-right containerbox">
                    <div className="where-to-contact">
                        <h1>Where To Find Me</h1>
                        <a href="https://github.com/jakedoren" target="_blank" rel="noreferrer"><button className="btn1 btn-background-slide"><FaGithub /></button></a>
                        <a href="https://www.linkedin.com/in/jacobdoren/" target="_blank" rel="noreferrer"><button className="btn2 btn-background-slide"><FaLinkedinIn /></button></a>
                        <a href="mailto:jakedoren@gmail.com" target="_blank" rel="noreferrer"><button className="btn3 btn-background-slide"><AiOutlineMail /></button></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
