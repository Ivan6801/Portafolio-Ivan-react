import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './sass/Header.scss'
import { Menu } from './Menu';
import BurgerMenu from '../assets/icons/menu.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if(showMenu) {
    menu = <Menu />
  }

  return (
  <Navbar className="navbar navbar-dark bg-dark" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img className='Logo' src="https://ivan6801.github.io/Portafolio-Ivan/images/Logo-Ivan-IG.png" alt="Logo de Ivan" /></Navbar.Brand>
      <Nav id="menu" className="ml-auto">
        <Link className='nav-link' href="#portafolio">Portafolio</Link>
        <Link className='nav-link' href="#experiencia">Experiencia</Link>
        <Link className='nav-link' to="/certificados">Certificados</Link>
        <Link className='nav-link' href="#pricing">JavaScript</Link>
        <Link className='nav-link' href="#contacto">Trabjemos juntos</Link>
      </Nav>
      <div>
        <i className='burger-button' onClick={() => setShowMenu(!showMenu)}><img id='burger-menu' src={BurgerMenu} alt='Menu' /> </i>
        { menu }
      </div>
      </Container>
  </Navbar>
  )
}

export { Header } 
