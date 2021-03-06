import React, {useEffect} from 'react'
import './Body.css'
import image from '../../images/codepic.jpeg'
import { init } from 'ityped'
export default function Body() {

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: true, typeSpeed: 150, strings: ['Jacob Doren', 'a Developer']})
    }, []) 

    return (
        <div className="img-wrapper">
            <h1 className="brand">
               Hi i'm <span id='myElement'></span>
            </h1>
            <img src={image} alt="codeImg" className="body-image" />
        </div>
    )
}
