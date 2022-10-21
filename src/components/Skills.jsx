import React from "react";
import "./sass/Skills.scss";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import xmlIcon from "../assets/icons/xml.svg";
import { BsWordpress } from "react-icons/bs";
import { SiAdobeillustrator } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiStyledcomponents } from "react-icons/si";

const Skills = () => {
  const html = 95;
  const css = 90;
  const js = 90;
  const git = 75;
  const xml = 30;
  const wordpress = 90;
  const adobeIllustrator = 75;
  const figma = 80;
  const styleComponets = 80;
  return (
    <>
      <br />
      <h2>SOBRE LO MISMO</h2>
      <p className="Skill-description">
        Hola soy Iván Alexander González González, Estudio en Platzi cursos
        online profesionales de tecnologia mi carrera Arquitectura Front End con
        React js y tengo 23 años soy sordo y me gusta mucho aprender todo lo
        relacionado con tecnologia. 🚀
      </p>
      <h2>EXPERIENCIA</h2>
      <p className="Skill-description">
        -Estudié en Universidad Tecnológica de Tijuana en la carrera de TSU en
        tecnologia información y comunicación. 📚
      </p>
      <p className="Skill-description">
        -Trabajé en empresa Grupo Guru - Diseño Paginas Web - Tijuana B.C.
        Realizé mis practicas profesionales Frontend donde me especialize en la creación
        de página WEB. utilizando el CMS WordPress por 4 meses. 🛒
      </p>
      <p className="Skill-description">
        -Trabajé en industrial G-Global como Ingeniero de software mi experiencia
        en WMS y TMS brindando soluciones óptimas para el desarrollo de proyectos,
        programación de software tanto para FullStack a través de RestApi
        utilizando tecnologías CRUD como React, Redux, Html, Scss, MongoDB, Nodejs,
        Formik, Postman, SQL y Test. Mantenimiento de los sistemas ya
        desarrollados por el equipo para darle soporte al usuario de problemas
        bugs en el sistema o nuevos requerimientos. mejora continua del sistema
        para optimizar procesos, limpiar código y aplicar buenas prácticas de
        programación para hacer un sistema escalabre. 🔧
      </p>
      <h2>HABILIDADES</h2>
      <Container className="mb-5">
        <Row className="flex-column">
          <Col>
            <h5>
              <FaHtml5 size={30} /> HTML5
            </h5>
            <ProgressBar variant="danger" now={`${html}`} label={`${html}%`} />
          </Col>
          <Col>
            <h5>
              <FaCss3Alt size={30} /> CSS3
            </h5>
            <ProgressBar variant="danger" now={`${css}`} label={`${css}%`} />
          </Col>
          <Col>
            <h5>
              <SiJavascript size={30} /> JavaScript ES10
            </h5>
            <ProgressBar variant="danger" now={`${js}`} label={`${js}%`} />
          </Col>
        </Row>
        <br />
        <Row className="flex-column">
          <Col>
            <h5>
              <FaGitAlt size={30} /> Git
            </h5>
            <ProgressBar variant="danger" now={`${git}`} label={`${git}%`} />
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <img className="xml mb-2" src={xmlIcon} alt="xml" />
              <h5>XML</h5>
            </div>
            <ProgressBar variant="danger" now={`${xml}`} label={`${xml}%`} />
          </Col>
          <Col>
            <h5>
              <BsWordpress size={30} /> WordPress
            </h5>
            <ProgressBar
              variant="danger"
              now={`${wordpress}`}
              label={`${wordpress}%`}
            />
          </Col>
        </Row>
        <br />
        <Row className="flex-column">
          <Col>
            <h5>
              <SiAdobeillustrator size={30} /> Adobe illustrator
            </h5>
            <ProgressBar
              variant="danger"
              now={`${adobeIllustrator}`}
              label={`${adobeIllustrator}%`}
            />
          </Col>
          <Col>
            <h5>
              <FiFigma size={30} /> Figma design
            </h5>
            <ProgressBar
              variant="danger"
              now={`${figma}`}
              label={`${figma}%`}
            />
          </Col>
          <Col>
            <h5>
              <SiStyledcomponents size={30} /> styled-components
            </h5>
            <ProgressBar
              variant="danger"
              now={`${styleComponets}`}
              label={`${styleComponets}%`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Skills };
