import React from 'react'
import './sass/Footer.scss'
import ivanf from '../assets/images/Logo-Ivan-IG.png'

const Footer = () => {
    return (
        <>
    <footer className="footer">
        <div className="container">
            <div>
                <p className='p-3'>Desarrollo web online 2020
                    <br />
                    <br />
                <img src={ivanf} width="300" alt="platzi" />
                </p>
            </div>
            <div>
                <p>
                    Diseñado con 💓 por Ivan Gonzalez Gonzalez
                </p>
                    <br />
                <p>
                    Version: 3
                </p>
                    <br />
            </div>
        </div>
    </footer>
        </>
    )
}

export { Footer } 
