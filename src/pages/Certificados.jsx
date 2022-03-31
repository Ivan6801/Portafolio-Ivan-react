import React, { useState } from 'react'
import './sass/Certificados.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { HeaderCertificados } from '../components/HeaderCertificados'
import { Contact } from '../components/Contact'
import Tabs from '../components/Tabs'
import { Footer } from '../components/Footer'
import frontend from '../assets/gif/frontend.gif'
import disenoGrafico from '../assets/gif/disenoGrafico.gif'
import wordpress from '../assets/gif/wordpress-dribbble.gif'
import reactGif from '../assets/gif/react.gif'
import giphy from '../assets/gif/giphy.gif'
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
import engineV8 from '../assets/certificates/engine-v8.jpg'
import javascriptDevanilla from '../assets/certificates/javascriptDevanilla.jpg'
import scope from '../assets/certificates/scope.jpg'
import Router from '../assets/certificates/Router.jpg'
import asincronismo from '../assets/certificates/asincronismo.jpg'
import postman from '../assets/certificates/postman.jpg'
import webpack from '../assets/certificates/webpack.jpg'
import react from '../assets/certificates/react.jpg'
import infoReact from '../assets/certificates/info-react.jpg'
import practicoReact from '../assets/certificates/react-practico.jpg'
import practicoJavaScript from '../assets/certificates/practicoJavaScript.jpg'
import svelte from '../assets/certificates/svelte.jpg'
import ReactNative from '../assets/certificates/ReactNative.jpg'

import reactAvanzado from '../assets/certificates/react-avanzado.jpg'
import reactHooks from '../assets/certificates/reactHooks.jpg'

import illustrator from '../assets/certificates/illustrator.jpg'
import adobeXD from '../assets/certificates/adobeXD.jpg'

import woo from '../assets/certificates/woo.jpg'

import androidStudio from '../assets/certificates/androidStudio.jpg'

const Certificados = () => {
  return (
  <>
    <HeaderCertificados />
    <Tabs />

      <div className='container'>
        <center><h2 className='fs-3 mt-5 fw-bold'>CERTIFICADOS</h2></center>
        <h3 id='arquitectura'>Arquitectura Front-End</h3>
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
            <div className="post">
              <img className='item-certificado' title='JQUERY A JAVASCRIPT' src={jquery} alt="JQUERY A JAVASCRIPT" />
              <span className="post-overlay">
                <span className="post-likes">Anterior - 2018</span>
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
            <div className="post">
              <img className='item-certificado' title='ANIMACIONES PARA LA WEB' src={animacionesParaLaWeb} alt="ANIMACIONES PARA LA WEB" />
              <span className="post-overlay">
                <span className="post-likes">Anterior - 2019</span>
              </span>
            </div>
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='BOOTSTRAP' src={bootstrap} alt="BOOTSTRAP" />
            </Col>
            <Col md={4}>
            <div className="post">
              <img className='item-certificado' title='FOUNDATION' src={foundation} alt="FOUNDATION" />
              <span className="post-overlay">
                <span className="post-likes">Anterior - 2018</span>
              </span>
            </div>
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
          <Row>
            <Col md={4}>
              <img className='item-certificado' title='JAVASCRIPT ENGINE (V8) Y EL NAVEGADOR' src={engineV8} alt="JAVASCRIPT ENGINE (V8) Y EL NAVEGADOR" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='SINGLE PAGE APPLICATION CON JAVASCRIPT VANILLA' src={javascriptDevanilla} alt="SINGLE PAGE APPLICATION CON JAVASCRIPT VANILLA" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='CLOSURES Y SCOPE EN JAVASCRIPT' src={scope} alt="CLOSURES Y SCOPE EN JAVASCRIPT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='ROUTER PARA SINGLE PAGE APP CON JAVASCRIPT' src={Router} alt="ROUTER PARA SINGLE PAGE APP CON JAVASCRIPT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='ASINCRONISMO CON JAVASCRIPT' src={asincronismo} alt="ASINCRONISMO CON JAVASCRIPT" />
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='POSTMAN' src={postman} alt="POSTMAN" />
            </Col>
            <Col md={4}>
            <div className="post">
              <img className='item-certificado' title='REACT.JS' src={react} alt="REACT.JS" />
              <span className="post-overlay">
                <span className="post-likes">Anterior - 2019</span>
              </span>
            </div>
            </Col>
            <Col md={4}>
              <img className='item-certificado' title='SVELTE' src={svelte} alt="SVELTE" />
            </Col>
          </Row>

        </Container>
          <hr />
          <h3 id='react'>Frontend con React.js</h3>
        <Container>
        <Image width={80} className='mb-3' src={reactGif} alt="React" roundedCircle  />
        <Row>
          <Col md={4}>
            <img className='item-certificado' title='PRACTICO DE JAVASCRIPT' src={practicoJavaScript} alt="PRACTICO DE JAVASCRIPT" />
          </Col>
          <Col md={4}>
            <img className='item-certificado' title='INTRODUCCION A REACT.JS' src={infoReact} alt="INTRODUCCION A REACT.JS" />
          </Col>
          <Col md={4}>
            <img className='item-certificado' title='PRACTICO DE REACT.JS' src={practicoReact} alt="PRACTICO DE REACT.JS" />
          </Col>
          <Col md={4}>
              <img className='item-certificado' title='WEBPACK' src={webpack} alt="WEBPACK" />
          </Col>
          <Col md={4}>
              <img className='item-certificado' title='REACT HOOKS' src={reactHooks} alt="REACT HOOKS" />
          </Col>
          <Col md={4}>
              <img className='item-certificado' title='REACT.JS AVANZADO' src={reactAvanzado} alt="REACT.JS AVANZADO" />
          </Col>
          <Col md={4}>
              <img className='item-certificado' title='INTRODUCCION A REACT NATIVE' src={ReactNative} alt="INTRODUCCION A REACT NATIVE" />
          </Col>
        </Row>

        </Container>
          <hr />
          <h3 id='diseno'>Diseño Gráfico</h3>
        <Container>
          <Image width={80} className='mb-3' src={disenoGrafico} alt="Diseño Grafico" roundedCircle  />
          <Row>
            <Col md={4}>
                <img className='item-certificado' title='ILLUSTRATOR' src={illustrator} alt="ILLUSTRATOR" />
            </Col>
            <Col md={4}>
                <img className='item-certificado' title='ADOBE XD' src={adobeXD} alt="ADOBE XD" />
            </Col>
          </Row>
        </Container>
          <hr />
          <h3 id='wordpress'>Wordpress</h3>
        <Container>
          <Image width={80} className='mb-3' src={wordpress} alt="Diseño Grafico" roundedCircle  />
          <Row>
            <Col md={4}>
                <img className='item-certificado' title='CREACION DE TIENDAS EN LINEA CON WOOCOMMERCE' src={woo} alt="CREACION DE TIENDAS EN LINEA CON WOOCOMMERCE" />
            </Col>
          </Row>
        </Container>
          <hr />
          <h3 id='android'>Android Studio</h3>
        <Container>
          <Image width={80} className='mb-3' src={giphy} alt="Android studio" roundedCircle  />
          <Row>
            <Col md={4}>
                <img className='item-certificado' title='DISENO DE INTERFACES ANDROID CON ANDROID STUDIO' src={androidStudio} alt="DISENO DE INTERFACES ANDROID CON ANDROID STUDIO" />
            </Col>
          </Row>
        </Container>
      </div>
    <Contact />
    <Footer />
  </>
  )
}

export { Certificados } 
