import React from 'react'
import './Projects.css'

export default function Projects(props) {
    return (
        <div className="projects-container">
           <div className="projects">
                <h1>{props.title}</h1>
                <a href={props.link}><img src={props.image} alt='hello' /></a>
           </div> 
        </div>
        
    )
}
