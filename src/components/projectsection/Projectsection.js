import React from 'react'
import Projects from '../Projects/Projects'
import apiapp from '../../images/apiapp.jpg'
import employeesort from '../../images/employeesort.jpg'
import rickapp3 from '../../images/rickapp3.jpg'
import Arcadelux from '../../images/arcadelux.jpg'
import './Projectsection.css'

const projectsection = () => {
    return (
        <div className="project-section" name="project-section">
            <h1 className="proj-title">Projects</h1>
            <div className="project-section-wrap">
                <Projects title="Character API" image={apiapp} link="https://compassionate-tesla-e7e979.netlify.app/"/>
                <Projects title="Employee Sort" image={employeesort} link="https://stoic-austin-50c836.netlify.app/" />
                <Projects title="Character Generator" image={rickapp3} link="https://sharp-blackwell-56aa0f.netlify.app/" />
                <Projects title="Arcadelux" image={Arcadelux} link="https://happy-pike-9aa462.netlify.app"/>
            </div>
        </div>
    )
}

export default projectsection
