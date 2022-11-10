import React from 'react'
import { HeaderCertificados } from '../components/HeaderCertificados'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

import js from '../assets/gif/js.gif'
import cientifico from '../assets/images/cientifico.jpg'
import math from '../assets/images/math.png'
import reactGif from '../assets/gif/react.gif'
import rick from '../assets/images/rick-morty-ivan.netlify.app.png'
import starWars from '../assets/images/star-wars.png'
import hooksApp from '../assets/images/intro-hooksApp.png'
import IntroReact from '../assets/gif/IntroReact.gif'
import yardSaleShop from '../assets/images/yard-sale-shop.png'
import petgram from '../assets/gif/petgram.gif'
import PetgramIcon from '../assets/icons/Petgram.jpg'
import gamesStorePwa from '../assets/images/games-store-pwa.png'
import pokemon from '../assets/images/pokemon.jpg'


const Javascript = () => {
	return (
		<>
			<HeaderCertificados />
			<div className='container mt-5'>
			<h2 id="portafolio">PORTAFOLIO (Proyectos JavaScript)</h2>
			<h3>Proyectos: <strong>10</strong></h3>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Petgram</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> <SiStyledcomponents color='#DD69C6' size={50} /> <SiGraphql color='#DE33A6' size={30} /> <SiPwa color='#0091F7' size={30} />  / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>10/02/2022</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://react-avanzado-ivan6801.vercel.app/" target="_blank">https://react-avanzado-ivan6801.vercel.app/</a></small></p>
				<a href="https://github.com/Ivan6801/react-avanzado" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Crea una aplicación para subir y compartir fotos de mascotas usando Webpack, GraphQL, React Hooks, React Router, SEO y PWAs. 			
				</p>
				<img title='Software' className='image-icon' src={PetgramIcon} alt="Icons" />
				</div>
				<figure className="project-imageContainer">
					<a href="https://react-avanzado-pf777zyyw-ivan6801.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="image-mobile" src={petgram} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">Tiendas de bebidas (E-commerce)</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> <SiJest color='#933E4C' size={30} /> <SiPwa color='#0091F7' size={30} /> <SiPaypal color='#012069' size={30} /> <SiStrapi color='#876FF2' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>11/01/2022</small></p>
				<p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://games-store-pwa.vercel.app/" target="_blank">https://games-store-pwa.vercel.app/</a></small></p>
				<a href="https://github.com/Ivan6801/games-store-pwa" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Desarrolla aplicaciones web con React Hooks. Integra herramientas como Strapi, React Helmet el SEO, React Icons, PWA, Jest, PayPal para desarrollar una tienda online con carrito de compras. Incorpora componentes funcionales.
				</p>
				</div>
				<figure className="project-imageContainer">
					<a href="https://games-store-pwa.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="project-image" src={gamesStorePwa} alt="prouyecto del curso de portafolio" /></a>
				</figure>
			</article>
			<article className='project'>
				<div className="project-details">
				<h3 className="project-title">React Native: Pokemon</h3>
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> / <img width={80} src={reactGif} alt="js" /> </h6>
				<p className="project-date"><small><strong>Fecha:</strong>29/03/2022</small></p>
				{/* <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://games-store-pwa.vercel.app/" target="_blank">https://games-store-pwa.vercel.app/</a></small></p> */}
				<a href="https://github.com/Ivan6801/Pokedex" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-dark text-uppercase"><FaGithub className='mb-1' size={20} /> ver código</button></a>
				<p className="project-description">
				Aprende a manejar listas y consumir APIs en React Native. Desarrolla los componentes, pantallas y navegación de aplicación.
				</p>
				<p className='project-desciption'>
					<small className='fw-bold fs-4'>API: </small><a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a>
				</p>
				</div>
				<figure className="project-imageContainer">
					<img className="image-mobile" src={pokemon} alt="prouyecto del curso de portafolio" />
				</figure>
			</article>
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
				<h6 className="project-course"><SiJavascript color='#333333' size={30} /> <SiStyledcomponents color='#DD69C6' size={50} /> / <img width={80} src={reactGif} alt="js" /> </h6>
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
					Realizé diseños en HTML y CSS a componentes reutilizables en React.js, Configurar entorno de desarrollo con Webpack y Babel. Define los componentes, contenedores, rutas, react hooks de proyecto.
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
