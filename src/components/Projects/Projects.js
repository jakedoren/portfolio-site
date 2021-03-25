import React from 'react'
import './Projects.css'
import rickapp2 from '../../images/rickapp3.jpg'
import arcadeapp from '../../images/arcadelux.jpg'

import rickapp from '../../images/rickapp.jpg'
import todoapp from '../../images/todoapp.jpg'

export default function Projects() {
    return (

        <div>
            <div className="title-contain" name="projects">
                <div className="title"> <h1>My Projects</h1></div>
            </div>
            
            <div className="project-container">
                <div className="project-left box">
                    <a href="https://sharp-blackwell-56aa0f.netlify.app" target="_blank" rel="noreferrer"><img src={rickapp2} className="rickapp" alt="rickandmortyapp"/></a>
                </div>
                <div className="project-right box ">
                    <a href="https://happy-pike-9aa462.netlify.app/" target="_blank" rel="noreferrer"><img src={arcadeapp} className="todo-app" alt="TodoApp"/></a>
                </div>
            </div>
        </div>
        
    )
}
