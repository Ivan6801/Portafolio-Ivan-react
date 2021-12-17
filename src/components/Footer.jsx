import React from 'react'
import './sass/Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div>
                <p>Curso de Desarrollo web online 2018 <img src="images/platzi.png" width="80" alt="platzi" /></p>
            </div>
            <div>
            <p>
                Designed with ❤️ by <a href="https://twitter.com/thespianartist">@thespianartist</a>
            </p>
            </div>
        </div>
        </footer>
    )
}

export { Footer } 
