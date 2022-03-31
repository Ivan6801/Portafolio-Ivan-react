import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { PortfolioSection } from '../components/PortfolioSection'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Experience } from '../components/Experience'
import './sass/media.scss'

const Portafolio = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <Portfolio />
      <div id='experiencia' className="container">
        <h2 className="event-list-title">Más sobre mi experiencia</h2>
      </div>
      <br />
      <Experience />
      <Event />
      <div className='certificados'>
        <Link to="/certificados"><button type="button" className="btn btn-outline-dark text-uppercase">Certificados</button></Link>
        <Link to="/javascript"><button type="button" className="btn btn-outline-dark text-uppercase">Javascript</button></Link>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export { Portafolio } 
