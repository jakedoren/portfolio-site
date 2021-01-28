import React from 'react'
import './Body.css'
import image from '../../images/codepic.jpeg'

export default function Body() {
    return (
        <div className="img-wrapper">
            <h1 className="brand"><span className="hi">Hi! I'm</span> Jacob Doren</h1>
            <img src={image} alt="codeImg" className="body-image" />
        </div>
    )
}
