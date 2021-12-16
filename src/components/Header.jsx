import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './sass/Header.scss'

const Header = () => {
  return (
  <Navbar className="navbar navbar-dark bg-dark" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img className='Logo' src="https://ivan6801.github.io/Portafolio-Ivan/images/Logo-Ivan-IG.png" alt="Logo de Ivan" /></Navbar.Brand>
      <Nav id="menu" className="ml-auto">
        <Nav.Link href="#home">Portafolio</Nav.Link>
        <Nav.Link href="#features">Experiencia</Nav.Link>
        <Nav.Link href="#pricing">Certificados</Nav.Link>
        <Nav.Link href="#pricing">JavaScript</Nav.Link>
        <Nav.Link href="#pricing">Trabjemos juntos</Nav.Link>
      </Nav>
      </Container>
  </Navbar>
  )
}

export { Header } 
