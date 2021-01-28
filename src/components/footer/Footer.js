import React from 'react'
import './Footer.css'
import { FaCopyright  } from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-text">
                    <p><FaCopyright /> 2021 Jacob Doren</p>
                </div>
            </div>
        </div>
    )
}
