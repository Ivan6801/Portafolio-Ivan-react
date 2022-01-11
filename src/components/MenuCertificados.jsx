import React from 'react'
import './sass/Menu.scss'
import { Link } from 'react-router-dom'

const MenuCertificados = () => {
  return (
    <nav className='menu fadeInDown'>
    <ol>
      <li>
        <Link className="link" to="/">Portafolio</Link>
      </li>
      <li>
        <Link className="link" to="/">Experiencia</Link>
      </li>
      <li>
        <Link className="link" to="/certificados">Certificados</Link>
      </li>
      <li>
        <Link className="link" to="javascript.html">JavaScript</Link>
      </li>
      <li>
        <Link className="link" to="/">Trabajemos juntos</Link>
      </li>
  </ol>
  </nav>
  )
}

export { MenuCertificados } 
