import React, { useState } from 'react'
import './sass/Header.scss'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { MenuCertificados } from './MenuCertificados';
import BurgerMenu from '../assets/icons/menu.png'
import { Link } from 'react-router-dom'

const HeaderCertificados = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if(showMenu) {
    menu = <MenuCertificados />
  }

  return (
    <Navbar className="navbar navbar-dark bg-dark" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className='Logo' src="https://ivan6801.github.io/Portafolio-Ivan/images/Logo-Ivan-IG.png" alt="Logo de Ivan" /></Navbar.Brand>
    <Nav id="menu" className="ml-auto">
      <Link className='nav-link' to="/">Portafolio</Link>
      <Link className='nav-link' to="/">Experiencia</Link>
      <Link className='nav-link' to="/certificados">Certificados</Link>
      <Link className='nav-link' to="/">JavaScript</Link>
      <Link className='nav-link' to="/">Trabjemos juntos</Link>
    </Nav>
    <div>
        <i className='burger-button' onClick={() => setShowMenu(!showMenu)}><img id='burger-menu' src={BurgerMenu} alt='Menu' /> </i>
        { menu }
      </div>
    </Container>
  </Navbar>
  )
}

export { HeaderCertificados } 
