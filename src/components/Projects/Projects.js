import React from 'react'
import './Projects.css'
import rickapp from '../../images/rickapp.jpg'
export default function Projects() {
    return (

        <div>
            <div className="title-contain">
                <div className="title"> <h1>My Projects</h1></div>
            </div>
            
            <div className="project-container">
                <div className="project-left box">
                    <a href="https://47pqo.csb.app/" target="_blank" rel="noreferrer"><img src={rickapp} className="rickapp" alt="rickandmortyapp"/></a>
                </div>
                <div className="project-right box ">
                    <p>in construction...</p>
                </div>
            </div>
        </div>
        
    )
}
