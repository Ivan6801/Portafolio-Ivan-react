import React, { useState } from 'react'
import './sass/Tabs.scss'
import { Toast, Row, Col, Button } from 'react-bootstrap'

const Tabs = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <>
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
          </Toast.Header>
          <ul class="list-group">
            <li class="list-group-item"><a href="#arquitectura">Arquitectura Front-End</a></li>
            <li class="list-group-item"><a href="#react">Frontend con React.js</a></li>
            <li class="list-group-item"><a href="#diseno">Diseño Gráfico</a></li>
            <li class="list-group-item"><a href="#wordpress">Wordpress</a></li>
            <li class="list-group-item"><a href="#android">Android Studio</a></li>
          </ul>
          <Toast.Body>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
    </>
  )
}

export default Tabs 
