import React from 'react'
import './About.css'
import headshotimage from '../../images/copped.jpg' 
export default function About() {
    return (
        <div className="flex-container">
            <div className="flex-left box">
                <div id="about" className="content">
                    <h1>Who am i?...</h1>
                    <p>Dedicated and driven Front End Developer with a passion for learning and utilizing new technologies. Highly adaptive to the changing field of technology while leveraging it to elevate user-experiences. Quick learner with a passion for building user centric, interactive, and dynamic websites. Experience working within an Agile environment,  on diverse teams, and applying new knowledge to provide quick and effective results. 
                    </p>
                </div>
            </div>
            <div className="flex-right box">
                    <img src={headshotimage} alt="headshot" className="headshot"/>
                    <i></i>
            </div>
        </div>
    )
}
