import React from 'react'
import './sass/Event.scss'
import arquitectura from '../assets/images/arquitectura.jpg'
import react from '../assets/images/react-wallpaper.png'
import gitW from '../assets/images/git-wallpaper.png'
import nodejs from '../assets/images/nodejs.jpg'
import adobeai from '../assets/images/illustrator.jpg'
import figmaled from '../assets/images/figmaled.png'
import paypal from '../assets/images/paypal.jpg'
import woo from '../assets/images/WooCommerce-plugins.jpg'

const Event = () => {
    return (
        <section className="event-list">
        <div className="container">
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={arquitectura} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Arquitectura Front end WEB</h3>
              <p className="event-description">Mi curso aprenderé a los estudiantes a crear un desarrollo web poder de la creatividad receptivo utilizando HTML5, CSS3 y JavaScript ES10.</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={react} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">React js</h3>
              <p className="event-description">Una biblioteca de JavaScript para construir interfaces de usuario.</p>            
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={gitW} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Git GitHub</h3>
              <p className="event-description">Profesional de Git y GitHub un sistema de control de versiones, es distribuido, es decir que múltiples personas pueden trabajar en equipo, es open source y también se adapta a todo tipo de proyectos desde pequeños hasta grandes, además, se pueden fusionar archivos, guarda una línea de tiempo a lo largo de todo el proyecto.</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={nodejs} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Node.js</h3>
              <p className="event-description">En esta clase verás qué diferencias hay entre el navegador y la visualización del teléfono, a lo que se le conoce como remote debugging y de lo que aprenderás más adelante. Por ahora, aprenderás a realizar un servidor de archivos estáticos con Node, esto te permitirá contar con las herramientas necesarias para trabajar sobre el remote debugging en distintos dispositivos. Así que, en primer lugar vas a descargar el software de Node, que te permitirá crear los archivos estáticos.</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={adobeai} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Adobe illustrator</h3>
              <p className="event-description">Diseño gráficos de iconos illustrator creatividad.</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={figmaled} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Figma</h3>
              <p className="event-description">Creando una aplicación de viajes que le permita a tus usuarios conocer nuevos lugares para viajar con sólo conocer su presupuesto y algunas preferencias personales..</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={paypal} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">PayPal</h3>
              <p className="event-description">Crea una página web que se conecta con PayPal para realizar el producto digital con botón de pago enlazado a Paypal.</p>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image" src={woo} width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">WooCommerce</h3>
              <p className="event-description">WooCommerce es un plugin de comercio electrónico de código abierto para WordPress. Está diseñado para pequeños y grandes comerciantes en línea con WordPress.</p>
            </div>
          </article>
        </div>
      </section>
    )
}

export { Event } 
