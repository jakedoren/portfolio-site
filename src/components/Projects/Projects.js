import React from 'react'
import './Projects.css'
import rickapp2 from '../../images/rickapp3.jpg'
import arcadeapp from '../../images/arcadelux.jpg'
import apiapp from '../../images/apiapp.jpg'

import rickapp from '../../images/rickapp.jpg'
import todoapp from '../../images/todoapp.jpg'

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
