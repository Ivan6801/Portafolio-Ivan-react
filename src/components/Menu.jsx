import React from 'react'
import './sass/Menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='menu fadeInDown'>
        <ol>
          <li>
            <a className="link" href="#portafolio">Portafolio</a>
          </li>
          <li>
            <a className="link" href="#experiencia">Experiencia</a>
          </li>
          <li>
            <Link className="link" to="/certificados">Certificados</Link>
          </li>
          <li>
            <Link className="link" to="javascript.html">JavaScript</Link>
          </li>
          <li>
            <a className="link" href="#contacto">Trabajemos juntos</a>
          </li>
      </ol>
    </nav>
  )
}

export { Menu } 
