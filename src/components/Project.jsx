import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './sass/Project.scss'
import mobile from '../assets/gif/mobile.gif'
import google from '../assets/images/google.jpg'
import googleGif from '../assets/gif/google.gif'
import brand from '../assets/images/brand.jpg'
import adobeXd from '../assets/gif/adobeXd.gif'
import instagram from '../assets/gif/instagram.gif'
import zelda from '../assets/gif/zelda.gif'
import instagramImage from '../assets/images/instagram.png'
import blogProfesional from '../assets/images/blog.png'
import Bootstrap from '../assets/images/Bootstrap.png'
import materializeBlog from '../assets/images/materialize-blog.png'
import tailwindMobile from '../assets/images/tailwindMobile.png'
import foundation from '../assets/images/foundation.jpg'
import lentes from '../assets/images/lentes.jpg'
import androidMoblie from '../assets/images/androidMoblie.png'
import aprendeSenas from '../assets/images/aprende_senas.jpg'
import Framework7 from '../assets/images/Framework-7.png'
import conalep from '../assets/images/conalep.jpg'
import lsm from '../assets/images/lsm.png'
import { FaHtml5 } from 'react-icons/fa'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { FaPaypal } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { SiPhpmyadmin } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { SiAndroidstudio } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TodoCounter } from './TodoCounter'

const defaultProject = [
  { text: 'Construye un sitio web responsivo', completed: true },
  { text: 'Google Clone', completed: true },
  { text: 'BRAND', completed: true },
  { text: 'Instagram', completed: true },
  { text: 'Blog profesional', completed: true },
  { text: 'Platzi Conf Hawaii', completed: true },
  { text: 'Primer sitio web con Tailwind CSS', completed: true },
  { text: 'Materialize Platzi News', completed: true },
  { text: 'PlatziFood', completed: true },
  { text: 'Sitio de compras en línea', completed: true },
  { text: 'Keva Fashion', completed: true },
  { text: 'Marketplace', completed: true },
  { text: 'Aprende señas app', completed: true },
  { text: 'Fast Learn', completed: true },
];

const Project = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [todos, setTodos] = useState(defaultProject);
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  return (
  <>
    <TodoCounter 
      completed={completedTodos}
    />
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Construye un sitio web responsivo</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaSass color='#333333' size={30} /> / <FiFigma color='#EA4C1D' size={30} /></h6>
        <p className="project-date"><small><strong>Fecha:</strong>01/6/2021</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Batabit/" target="_blank">https://ivan6801.github.io/Batabit/</a></small></p>
        <a href="https://github.com/Ivan6801/Batabit" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Platzi Video fue el resultado de 3 meses de trabajo
        Crearás el frontend de un sitio web partiendo de su wireframe, analizarás su arquitectura y construirás en código cada una de sus partes para que este se adapte a cualquier dispositivo de los usuarios.
        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Batabit/" target="_blank" rel="noopener noreferrer"><img className="image-mobile" src={mobile} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Google Clone</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> / <img width={80} src={googleGif} alt="Google Chrome" /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>02/02/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Google-Clone/" target="_blank">https://ivan6801.github.io/Google-Clone/</a></small></p>
        <a href="https://github.com/Ivan6801/Google-Clone" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Crea un clone de la página de Google y pon en práctica CSS y HTML.
        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Google-Clone/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={google} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">BRAND</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <FaPaypal color='#333333' size={30} /> / <img width={80} src={adobeXd} alt="Adobe XD" /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>07/02/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/BRAND/index.html" target="_blank">https://ivan6801.github.io/BRAND/index.html</a></small></p>
        <a href="https://github.com/Ivan6801/BRAND" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Crea una página web que se conecta con PayPal para realizar el proceso de pago de los productos ofrecidos.
        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/BRAND/index.html" target="_blank" rel="noopener noreferrer"><img className="project-image" src={brand} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Instagram</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <BsGrid1X2Fill color='#333333' size={25} /> / <img width={80} src={instagram} alt="Instagram" /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>16/03/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Instagram-/" target="_blank">https://ivan6801.github.io/Instagram-/</a></small></p>
        <a href="https://github.com/Ivan6801/Instagram-" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">CSS Grid Layout con filas y columnas.
        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Instagram-/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={instagramImage} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Blog profesional</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> / <img width={80} src={adobeXd} alt="Adobe XD" /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>24/03/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Maquetacion-blog/" target="_blank">https://ivan6801.github.io/Maquetacion-blog/</a></small></p>
        <a href="https://github.com/Ivan6801/Maquetacion-blog" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">CSS Grid Layout con filas y columnas.
        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Maquetacion-blog/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={blogProfesional} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Platzi Conf Hawaii</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiJavascript color='#333333' size={25} /> / <FaBootstrap color='#6C10ED' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>09/06/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Bootstrap/" target="_blank">https://ivan6801.github.io/Bootstrap/</a></small></p>
        <a href="https://github.com/Ivan6801/Bootstrap" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Platzi Conf llega por pimera vez a Hawaii! Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que están creando el futuro de internet.        </p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Bootstrap/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={Bootstrap} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Primer sitio web con Tailwind CSS</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiJavascript color='#333333' size={25} /> / <SiTailwindcss color='#10B5AF' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>21/11/2021</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/tailwindcss-zelda/public/index.html" target="_blank">https://ivan6801.github.io/tailwindcss-zelda/public/index.html</a></small></p>
        <a href="https://github.com/Ivan6801/tailwindcss-zelda" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Cree rápidamente sitios web modernos sin tener que abandonar su HTML.</p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/tailwindcss-zelda/public/index.html" target="_blank" rel="noopener noreferrer"><img className="project-image" src={zelda} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Materialize Platzi News</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> / <DiMaterializecss color='#DF6971' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>31/07/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Materialize/" target="_blank">https://ivan6801.github.io/Materialize/</a></small></p>
        <a href="https://github.com/Ivan6801/Materialize" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Desarrolla la estructura de un sitio de noticias usando Materialize. Implementa sus componentes y adáptalos a las necesidades del proyecto.</p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Materialize/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={materializeBlog} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">PlatziFood</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiJavascript color='#333333' size={25} /> / <SiTailwindcss color='#10B5AF' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>24/07/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Food/Proyecto/header.html" target="_blank">https://ivan6801.github.io/Food/Proyecto/header.html</a></small></p>
        <a href="https://github.com/Ivan6801/Food/tree/master/Proyecto" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">El sitio web de un negocio de comida . Con Tailwind, como diseñar primero para móviles y optimizar la página para cualquier dispositivo.</p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Food/Proyecto/header.html" target="_blank" rel="noopener noreferrer"><img className="image-mobile" src={tailwindMobile} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Sitio de compras en línea</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiJavascript color='#333333' size={25} /> / <img width={80} src={adobeXd} alt="Adobe XD" /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>10/09/2020</small></p>
        <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Foundation/" target="_blank">https://ivan6801.github.io/Foundation/</a></small></p>
        <a href="https://github.com/Ivan6801/Foundation" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
        <p className="project-description">Durante el curso desarrollaremos un sitio de compras en línea.</p>
        </div>
        <figure className="project-imageContainer">
          <a href="https://ivan6801.github.io/Foundation/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={foundation} alt="prouyecto del curso de portafolio" /></a>
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Keva Fashion</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiPhp color='#333333' size={30} /> / <SiPhpmyadmin color='#333333' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>15/07/2019</small></p>
        <p className="project-description">El proyecto ya implementado puede ser publicado en internet para que los clientes puedan comprar los productos, las ventas aumentan al 50% y ya no tiene problema del control del inventario por las ventas.</p>
        </div>
        <figure className="project-imageContainer">
          <img className="project-image" src={lentes} alt="prouyecto del curso de portafolio" />
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Marketplace</h3>
        <h6 className="project-course"><SiAndroidstudio color='#333333' size={30} /> / <DiAndroid color='#3DDB85' size={30} /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>06/12/2019</small></p>
        <p className="project-description">Ropa y accesorios colección de artículos del mercado encuentra nuevos y usados para la venta en Tijuana Marketplace app.</p>
        </div>
        <figure className="project-imageContainer">
          <img className="image-mobile" src={androidMoblie} alt="prouyecto del curso de portafolio" />
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Aprende señas app</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiPhp color='#333333' size={30} /> / <img width={70} src={Framework7} alt='Frameword 7' /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>12/06/2018</small></p>
        <p className="project-description">Aprender Lengua de Señas Mexicana en linea por videos gratis.</p>
        </div>
        <figure className="project-imageContainer">
          <img className="project-image" src={aprendeSenas} alt="prouyecto del curso de portafolio" />
        </figure>
    </article>
    <article className='project'>
        <div className="project-details">
        <h3 className="project-title">Fast Learn</h3>
        <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaCss3Alt color='#333333' size={30} /> <SiMysql color='#333333' size={30} /> / <SiJquery width={30} color='#333333' /> </h6>
        <p className="project-date"><small><strong>Fecha:</strong>01/12/2017</small></p>
        <strong>Emprendedores:</strong><b> Segundo Lugar</b>
        <br />
        <Button variant="btn btn-outline-dark text-uppercase mt-2" onClick={handleShow}>
          Ver mi reconocimiento
        </Button>
        <p className="project-description">Le presentamos un nuevo proyecto empresarial donde creamos una aplicación para las personas oyente que le gustaría aprender lengua de señas para poder comunicar con las personas que padece discapacidad auditiva, entonces hacemos un documento para llegar el objetivo del sistema programación, creamos organizarlo bien para que todo quede fácil le presentamos como utilizar el sistema ya que lanzaremos una aplicación, en la hoja se mostrara cada detalle y nombre del sistema.</p>
        </div>
        <figure className="project-imageContainer">
          <img className="project-image" src={lsm} alt="prouyecto del curso de portafolio" />
        </figure>
    </article>
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Emprendedores: Segundo Lugar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img width='100%' src={conalep} alt="conalep" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Regresa
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export { Project }  
