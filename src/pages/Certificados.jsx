import React, { useState } from 'react'
import './sass/Certificados.scss'
import { Container, Row, Col, Image  } from 'react-bootstrap'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import frontend from '../assets/gif/frontend.gif'
import one from '../assets/images/one.png'
import htmlCss from '../assets/certificates/htmlCss.jpg'
import htmlCssPractico from '../assets/certificates/htmlCssPractico.jpg'
import DesarrolloDeWebOnline from '../assets/certificates/DesarrolloDeWebOnline.jpg'


const Certificados = () => {

    return (
        <>
          <Header />
            <div className='container'>
              <center><h2 className='fs-3 mt-5 fw-bold'>CERTIFICADOS</h2></center>
              <h3>Arquitectura Front-End</h3>
              <Image width={80} src={frontend} alt="Frontend" roundedCircle  />
              <hr />
              <h5>Básico <img width={18} src={one} alt="" /></h5>
              <Container>
                <Row className="justify-content-md-center">
                  <Col md={4}>
                    <img className='item-certificado' title='HTML Y CSS'  src={htmlCss} alt="HTML Y CSS" />
                  </Col>
                  <Col md={4}>
                    <img className='item-certificado' title='PRÁCTICO DE HTML Y CSS'  src={htmlCssPractico} alt="PRÁCTICO DE HTML Y CSS" />
                  </Col>
                  <Col md={4}>
                    <img className='item-certificado' title='DESARROLLO WEB ONLINE'  src={DesarrolloDeWebOnline} alt="DESARROLLO WEB ONLINE" />
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
