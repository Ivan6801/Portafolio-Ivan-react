import React from 'react'
import './sass/Portfolio.scss'
import { Project } from './Project'
import { Skills } from './Skills'

const Portfolio = () => {
    return (
        <section id="portafolio" className="portfolio">
            <div className='container'>
                <Skills />
                <h2>Portafolio (Proyectos Destacados)</h2>
                <Project />
            </div>
        </section>
    )
}

export { Portfolio } 
