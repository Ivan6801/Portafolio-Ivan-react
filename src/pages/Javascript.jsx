import React from 'react'
import { HeaderCertificados } from '../components/HeaderCertificados'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";


import js from '../assets/gif/js.gif'
import cientifico from '../assets/images/cientifico.jpg'
import reactGif from '../assets/gif/react.gif'
import rick from '../assets/images/rick-morty-ivan.netlify.app.png'
import starWars from '../assets/images/star-wars.png'
import reactBadges from '../assets/gif/reactBadges.gif'


const Javascript = () => {
	return (
		<>
			<HeaderCertificados />
			<div className='container mt-5'>
			<h2 id="portafolio">PORTAFOLIO (Proyectos JavaScript)</h2>
			<h3>Proyectos: <strong>4</strong></h3>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">JavaScript Vanilla</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={50} src={js} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>14/12/2020</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/cientifico/" target="_blank">https://ivan6801.github.io/cientifico/</a></small></p>
				<a href="https://github.com/Ivan6801/cientifico" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
					Crea una aplicación web de página única y cárgala con información usando JavaScript Vanilla. Diseña una experiencia fluida para tus usuarios llamando a una API para mostrar la información y navegar entre los detalles de cada personaje.
				</p>
				<p className='project-desciption'>
					<small className='fw-bold fs-4'>API:</small><a href="https://rickandmortyapi.com/" target="_blank">https://rickandmortyapi.com/</a>
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://ivan6801.github.io/cientifico/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={cientifico} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Lista de personajes de Rick y Morty API</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>21/12/2020</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://rick-morty-ivan.netlify.app/" target="_blank">https://rick-morty-ivan.netlify.app/</a></small></p>
				<a href="https://github.com/Ivan6801/practice-react" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
              | Construir una API con React <br /> | Construir React buscar filtrar con React Hooks <br /> | Hooks: Cargar, Error, Datos. <br /> | Creando la interfaz con styled-components
        </p>
				<p className='project-desciption'>
					<small className='fw-bold fs-4'>API:</small><a href="https://rickandmortyapi.com/" target="_blank">https://rickandmortyapi.com/</a>
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://rick-morty-ivan.netlify.app/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={rick} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">The Star Wars API</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>25/08/2021</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/starwarsapi/" target="_blank">https://ivan6801.github.io/starwarsapi/</a></small></p>
				<a href="https://github.com/Ivan6801/starwarsapi" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Realizado un proyecto del STAR WARS con React js a api es la primera fuente de datos tomar tratando de obtener a el archivo información de la lista.
        </p>
				<p className='project-desciption'>
					<small className='fw-bold fs-4'>API:</small><a href="https://swapi.dev/" target="_blank">https://swapi.dev/</a>
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://ivan6801.github.io/starwarsapi/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={starWars} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Platzi Badges React js</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>07/04/2021</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/proyecto-platzi-badges/" target="_blank">https://ivan6801.github.io/proyecto-platzi-badges/</a></small></p>
				<a href="https://github.com/Ivan6801/proyecto-platzi-badges" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Crear una plataforma para llevar registro de los asistentes a la Platzi Conf, haciendo posible que cada usuario registrado puede ingresar su información personal. Cada uno de ellos tendrá un rol diferente y esto se verá reflejado en su badge. Por último, crearás una página que permitirá listar a todos los participantes y filtrarlos por tipo de rol, o hacer búsqueda por nombre.        </p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://ivan6801.github.io/proyecto-platzi-badges/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={reactBadges} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			</div>
			<Contact />
			<Footer />
		</>
	)
}

export { Javascript } 
