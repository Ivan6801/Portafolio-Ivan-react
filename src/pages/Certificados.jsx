import React, { useState } from 'react'
import './sass/Certificados.scss'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import frontend from '../assets/gif/frontend.gif'
import one from '../assets/images/one.png'
import htmlCss from '../assets/certificates/htmlCss.jpg'


const Certificados = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
          <Header />
            <div className='container'>
              <center><h2 className='fs-3 mt-5 fw-bold'>CERTIFICADOS</h2></center>
              <h3>Arquitectura Front-End</h3>
              <img width={80} src={frontend} alt="Frontend" />
              <hr />
              <h5>Básico <img width={18} src={one} alt="" /></h5>
              <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>HTML Y CSS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img className='item-certificado'  src={htmlCss} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
              <Container>
              <Row className="justify-content-md-center">
                <Col md="4">
                  <img onClick={handleShow} className='item-certificado' src={htmlCss} alt="" />
                </Col>
                <Col md="4">
                  <img className='item-certificado' src={htmlCss} alt="" />
                </Col>
                <Col md="4">
                  <img className='item-certificado' src={htmlCss} alt="" />
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
