import React from 'react'
import './sass/HeroSection.scss'
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import ivan from '../assets/images/IvanV2.jpg'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container-hero">
        <h1 className='fs-1'>
          Hola! Soy <strong>Ivan Gonzalez</strong> <br/> Desarrollador  <strong>FullStack</strong> profesional con <br /> pasión por la <strong>aprendizaje </strong> 😃
        </h1>
        <figure>
          <img className="hero-image" src={ivan} width="500" height="300" alt="imagen principal del sitio" />
            <div className='ProfileHeader'>
              <span>Pro</span>
            </div>
          <div className='hero-link'>
            <a href="https://github.com/Ivan6801" rel="noopener" target="_blank"><FaGithub className='Icons' size={50} />  </a>
            <a href="https://twitter.com/gonzaleziv5" rel="noopener" target="_blank"><BsTwitter className='Icons' size={50} />  </a>
            <a href="https://www.linkedin.com/in/ivan-gonzalez-9465411b1/" rel="noopener" target="_blank"><FaLinkedin className='Icons' size={50} />  </a>
          </div>
        </figure>
          
      </div>
    </section>
  )
}

export { HeroSection } 
