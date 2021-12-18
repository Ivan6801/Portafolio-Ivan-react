import React from 'react'
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
      <div className="container">
        <h2 className="event-list-title">Más sobre mi experiencia</h2>
      </div>
      <br />
      <Experience />
      <Event />
      <Contact />
      <Footer />
    </>
  )
}

export { Portafolio } 
