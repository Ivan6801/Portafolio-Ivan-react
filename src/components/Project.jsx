import React from 'react'
import './sass/Project.scss'

const Project = () => {
    return (
      <>
        <article className='project'>
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
