import React from 'react'
import './sass/Contact.scss'

const Contact = () => {
    return (
<   section id="contacto" className="contact">
      <div className="container">
        <form action="/suscripcion/" className="form-email">
          <h3>¿Creamos algo juntos?</h3>
          <input type="text" placeholder="Déjame tu email" id="email" />
          <button>Enviar</button>
        </form>
        <div className="social">
          <a href="https://twitter.com/leonidasesteban" className="social-link twitter">twitter</a>
          <a href="https://facebook.com/leonidas.esteban" className="social-link facebook">facebook</a>
          <a href="https://github.com/leonidasesteban" className="social-link github">github</a>
          <a href="https://instagram.com/leonidasesteban" className="social-link instagram">instagram</a>
        </div>
      </div>
    </section>
    )
}

export { Contact } 
