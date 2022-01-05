import React from 'react'
import './sass/Menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='menu'>
        <ol>
          <li>
            <Link className="link" to="#portafolio">Portafolio</Link>
          </li>
          <li>
            <Link className="link" to="#eventos">Experiencia</Link>
          </li>
          <li>
            <Link className="link" to="certificados.html">Certificados</Link>
          </li>
          <li>
            <Link className="link" to="javascript.html">JavaScript</Link>
          </li>
          <li>
            <Link className="link" to="#contacto">Trabajemos juntos</Link>
          </li>
      </ol>
    </nav>
  )
}

export { Menu } 
