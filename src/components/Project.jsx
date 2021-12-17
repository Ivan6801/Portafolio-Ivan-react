import React from 'react'
import './sass/Project.scss'
import mobile from '../assets/gif/mobile.gif'
import { FaHtml5 } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

const Project = () => {
    return (
      <>
        <h3>Proyectos: <small id='count'>14</small></h3>
        <article className='project'>
            <div className="project-details">
            <h3 className="project-title">Construye un sitio web responsivo <img width={40} src="../assets/icons/figma.png" alt="" /></h3>
            <h6 className="project-course"><FaHtml5 color='#333333' size={30} /><FaSass color='#333333' size={30} /> / <FiFigma color='#333333' size={30} /></h6>
            <p className="project-date"><small><strong>Fecha:</strong> 01/6/2021</small></p>
            <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://ivan6801.github.io/Batabit/" target="_blank">https://ivan6801.github.io/Batabit/</a></small></p>
            <p className="project-description">Platzi Video fue el resultado de 3 meses de trabajo
            Crearás el frontend de un sitio web partiendo de su wireframe, analizarás su arquitectura y construirás en código cada una de sus partes para que este se adapte a cualquier dispositivo de los usuarios.
            </p>
            </div>
            <figure className="project-imageContainer">
            <img className="project-image" src={mobile} alt="prouyecto del curso de React Native" />
            </figure>
        </article>
        <article className="project">
            <div className="project-details">
            <h3 className="project-title">Platzi Video</h3>
            <h6 className="project-course">React Native / React</h6>
            <p className="project-date"><small><strong>Fecha:</strong> 01/07/2018</small></p>
            <p className="project-url"><small><strong>Puedes verlo en:</strong> www.platzi.com/native</small></p>
            <p className="project-description">Platzi Video fue el resultado de 3 meses de trabajo
                para crear la mejor app para enseñar el funcionamiento
                de React y React Native. Desde crear un vista-detalle, hasta patrones avanzados de nevegación, este proyecto ha sido el ejemplo de futuros creadores de aplicaciones multiplataforma</p>
            </div>
            <figure className="project-imageContainer">
            <img className="project-image" width="500" src="https://leonidasesteban.github.io/responsive-design-portafolio/images/platzi-video-react-native.png" alt="prouyecto del curso de React Native" />
            </figure>
        </article>
      </>
    )
}

export { Project }  
