import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './sass/Header.scss'
import { Menu } from './Menu';
import BurgerMenu from '../assets/icons/menu.png'
import { Link } from 'react-router-dom'
import IvanG from '../assets/icons/Logo-Ivan-IG.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if(showMenu) {
    menu = <Menu />
  }

  return (
  <Navbar className="navbar navbar-dark bg-dark" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand>
            <img className='Logo' src={IvanG} alt="Logo de Ivan" />
          </Navbar.Brand>
      <Nav id="menu" className="ml-auto">
        <a className='nav-link' href="#portafolio">Portafolio</a>
        <a className='nav-link' href='#experiencia'>Experiencia</a>
        <Link className='nav-link' to="/certificados">Certificados</Link>
        <Link className='nav-link' to="/javascript">JavaScript</Link>
        <a className='nav-link' href="#contacto">Trabjemos juntos</a>
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
