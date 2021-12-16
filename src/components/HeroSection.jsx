import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './sass/HeroSection.scss'
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
  <section className='Hero__section'>
    <Container>
      <Row id='Hero__container'>
        <Col xs lg="6">
          <h1 className='Hero__title'>
            Hola! Soy <strong>Ivan Gonzalez</strong> <br /> Desarrollador <strong>WEB</strong> profesional con <br /> pasión
            por el <strong>aprendizaje</strong> 😀
          </h1>
        </Col>
        <Col xs lg="3">
          <img className='Hero__image' src="https://ivan6801.github.io/Portafolio-Ivan/images/IvanV2.jpg" alt="Ivan de perfil" />
            <ol className="my-3 d-flex justify-content-center list-unstyled">
              <li className='p-3'>
                <a href="https://github.com/Ivan6801" target="_blank">
                  <FaGithub className='IconsHover' color='black' size={50} />
                </a>
              </li>
              <li className='p-3'>
                <a href="https://twitter.com/alexanderx_iv" target="_blank">
                  <BsTwitter className='IconsHover' color='black' size={50} />
                </a>
              </li>
              <li className='p-3'>
                <a href="https://www.linkedin.com/in/ivan-gonzalez-9465411b1/" target="_blank">
                  <FaLinkedin className='IconsHover' color='black' size={50} />
                </a>
              </li>
            </ol>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export { HeroSection } 
