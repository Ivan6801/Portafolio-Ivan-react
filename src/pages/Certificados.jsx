import React, { useState } from 'react'
import './sass/Certificados.scss'
import { Container, Row, Col, Image  } from 'react-bootstrap'
import { HeaderCertificados } from '../components/HeaderCertificados'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import frontend from '../assets/gif/frontend.gif'
import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import htmlCss from '../assets/certificates/htmlCss.jpg'
import htmlCssPractico from '../assets/certificates/htmlCssPractico.jpg'
import DesarrolloDeWebOnline from '../assets/certificates/DesarrolloDeWebOnline.jpg'
import responsiveDesgin from '../assets/certificates/responsiveDesgin.jpg'
import responsiveDesignMaquetacionMobileFirst from '../assets/certificates/responsive-design-maquetacion-mobile-first.jpg'
import CssGridLayout from '../assets/certificates/CssGridLayout.jpg'
import maquetacionEnCss from '../assets/certificates/maquetacionEnCss.jpg'
import basicoDeJavascript from '../assets/certificates/basicoDeJavascript.jpg'
import javascript from '../assets/certificates/javascript.jpg'
import git from '../assets/certificates/git.jpg'
import jquery from '../assets/certificates/jquery.jpg'
import prerpocesadores from '../assets/certificates/prerpocesadores.jpg'
import sass from '../assets/certificates/sass.jpg'
import animacionesParaLaWeb from '../assets/certificates/animacionesParaLaWeb.jpg'
import bootstrap from '../assets/certificates/bootstrap.jpg'
import foundation from '../assets/certificates/foundation.jpg'
import sistema from '../assets/certificates/sistema.jpg'
import tailwindCss from '../assets/certificates/tailwindCss.jpg'
import materializeCss from '../assets/certificates/materializeCss.jpg'


const Certificados = () => {
  return (
  <>
    <HeaderCertificados />
      <div className='container'>
        <center><h2 className='fs-3 mt-5 fw-bold'>CERTIFICADOS</h2></center>
        <h3>Arquitectura Front-End</h3>
        <Image width={80} src={frontend} alt="Frontend" roundedCircle  />
        <hr />
        <h5>Básico <img className='numbers' src={one} alt="Básico" /></h5>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <img className='item-certificado' title='HTML Y CSS' src={htmlCss} alt="HTML Y CSS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='PRÁCTICO DE HTML Y CSS' src={htmlCssPractico} alt="PRÁCTICO DE HTML Y CSS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='DESARROLLO WEB ONLINE' src={DesarrolloDeWebOnline} alt="DESARROLLO WEB ONLINE" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='RESPONSIVE DESIGN' src={responsiveDesgin} alt="RESPONSIVE DESIGN" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='RESPONSIVE DESIGN: MAQUETACION MOBILE FIRST' src={responsiveDesignMaquetacionMobileFirst} alt="RESPONSIVE DESIGN: MAQUETACION MOBILE FIRST" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='CSS GRID LAYOUT' src={CssGridLayout} alt="CSS GRID LAYOUT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='CSS GRID LAYOUT' src={CssGridLayout} alt="CSS GRID LAYOUT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='MAQUETACION EN CSS' src={maquetacionEnCss} alt="MAQUETACION EN CSS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='BASICO DE JAVASCRIPT' src={basicoDeJavascript} alt="BASICO DE JAVASCRIPT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='JAVASCRIPT' src={javascript} alt="JAVASCRIPT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='GIT Y GITHUB' src={git} alt="GIT Y GITHUB" />
            </Col>
            <Col md={4}>
            <div class="post">
            <img className='item-certificado' title='JQUERY A JAVASCRIPT' src={jquery} alt="JQUERY A JAVASCRIPT" />
            <span class="post-overlay">
              <span class="post-likes">Anterior - 2018</span>
            </span>
          </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h5>Intermedio <img className='numbers' src={two} alt="Intermedio" /></h5>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <img className='item-certificado' title='PREPROCESADORES CSS' src={prerpocesadores} alt="PREPROCESADORES CSS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='SASS' src={sass} alt="SASS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='ANIMACIONES PARA LA WEB' src={animacionesParaLaWeb} alt="ANIMACIONES PARA LA WEB" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='BOOTSTRAP' src={bootstrap} alt="BOOTSTRAP" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='FOUNDATION' src={foundation} alt="FOUNDATION" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='SISTEMAS DE DISENO PARA DESARROLLADORES' src={sistema} alt="SISTEMAS DE DISENO PARA DESARROLLADORES" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='TAILWIND CSS' src={tailwindCss} alt="TAILWIND CSS" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='MATERIALIZE CSS' src={materializeCss} alt="MATERIALIZE CSS" />
            </Col>
          </Row>
        </Container>
        <Container>
          <h5>Avanzado <img className='numbers' src={three} alt="Avanzado" /></h5>
        </Container>
      </div>
    <Contact />
    <Footer />
  </>
  )
}

export { Certificados } 
