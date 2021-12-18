import React from 'react'
import './sass/Contact.scss'
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
<   section id="contacto" className="contact">
      <div className="container">
        <form action="/suscripcion/" className="form-email">
          <h3>¿CREAMOS ALGO JUNTOS?</h3>
          <h3>Correo: <a className="text-primary" href="mailto:hal308366@gmail.com">hal308366@gmail.com</a> </h3>
          {/* <input type="text" placeholder="Déjame tu email" id="email" />
          <button>Enviar</button> */}
        </form>
        <div className='hero-link'>
            <a href="https://github.com/Ivan6801" rel="noopener" target="_blank"><FaGithub className='link-social-git m-3' size={50} />  </a>
            <a href="https://twitter.com/gonzaleziv5" rel="noopener" target="_blank"><BsTwitter className='link-social-tw m-3' size={50} />  </a>
            <a href="https://www.linkedin.com/in/ivan-gonzalez-9465411b1/" rel="noopener" target="_blank"><FaLinkedin className='link-social-link m-3' size={50} />  </a>
        </div>
      </div>
    </section>
    )
}

export { Contact } 
