import React from 'react'
import { HeaderCertificados } from '../components/HeaderCertificados'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import js from '../assets/gif/js.gif'
import cientifico from '../assets/images/cientifico.jpg'
import math from '../assets/images/math.png'
import reactGif from '../assets/gif/react.gif'
import rick from '../assets/images/rick-morty-ivan.netlify.app.png'
import starWars from '../assets/images/star-wars.png'
import hooksApp from '../assets/images/intro-hooksApp.png'
import IntroReact from '../assets/gif/IntroReact.gif'
import yardSaleShop from '../assets/images/yard-sale-shop.png'


const Javascript = () => {
	return (
		<>
			<HeaderCertificados />
			<div className='container mt-5'>
			<h2 id="portafolio">PORTAFOLIO (Proyectos JavaScript)</h2>
			<h3>Proyectos: <strong>7</strong></h3>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Aplicación de tareas</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>11/01/2022</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/intro-react/" target="_blank">https://ivan6801.github.io/intro-react/</a></small></p>
				<a href="https://github.com/Ivan6801/intro-react" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
					Aplicación para administrar tus tareas.
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://ivan6801.github.io/intro-react/" target="_blank" rel="noopener noreferrer"><img className="image-mobile" src={IntroReact} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
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
				<h3 className="project-title">Página web de matemáticas</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={50} src={js} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>14/12/2020</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Math/" target="_blank">https://ivan6801.github.io/Math/</a></small></p>
				<a href="https://github.com/Ivan6801/Math" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Practica todo lo que has aprendido de JavaScript para crear una página web con diferentes ejercicios básicos de matemáticas.				
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://ivan6801.github.io/Math/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={math} alt="prouyecto del curso de portafolio" /></a>
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
				<p className="project-date"><small><strong>Fecha:</strong>03/07/2021</small></p>
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
				<h3 className="project-title">Introducción a React Hooks</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>30/01/2022</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://intro-hooks.netlify.app/" target="_blank">https://intro-hooks.netlify.app/</a></small></p>
				<a href="https://github.com/Ivan6801/react-hooks" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
					Proyecto con todos los hooks de React. <br />
					| useState, useEffect, useReducer, useMemo, useRef, useCallback 
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://intro-hooks.netlify.app/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={hooksApp} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Práctico de React.js</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>05/02/2022</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://yard-sale-shop.netlify.app/" target="_blank">https://yard-sale-shop.netlify.app/</a></small></p>
				<a href="https://github.com/Ivan6801/react-shop" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
					Realizé diseños en HTML y CSS a componentes reutilizables en React.js, Configurar entorno de desarrollo con Webpack y Babel. Define los componentes, contenedores, rutas, react hooks de tu proyecto.
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://yard-sale-shop.netlify.app/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={yardSaleShop} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			</div>
			<Contact />
			<Footer />
		</>
	)
}

export { Javascript } 
