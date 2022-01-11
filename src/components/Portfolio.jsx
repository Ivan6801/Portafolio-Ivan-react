import React from 'react'
import './sass/Portfolio.scss'
import { Project } from './Project'
import { Skills } from './Skills'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className='container'>
                <Skills />
                <h2 id='portafolio'>Portafolio (Proyectos Destacados)</h2>
                <Project />
            </div>
        </section>
    )
}

export { Portfolio } 
