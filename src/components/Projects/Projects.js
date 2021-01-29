import React from 'react'
import './Projects.css'
import rickapp from '../../images/rickapp.jpg'
import todoapp from '../../images/todoapp.jpg'
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
                    <a href="https://47pqo.csb.app/" target="_blank" rel="noreferrer"><img src={todoapp} className="todo-app" alt="TodoApp"/></a>
                </div>
            </div>
        </div>
        
    )
}
