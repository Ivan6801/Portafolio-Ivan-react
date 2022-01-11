import React from 'react'
import Found from '../assets/icons/404 Page Not Found _Isometric.svg'
import './sass/NotFound.scss'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img className='NotFound-image' src={Found} alt="" />
            <Button variant="btn btn-outline-dark text-uppercase mt-2">
                <Link className='NotFound-link' to='/'>Regresa</Link>
            </Button>
        </div>
    )
}

export { NotFound } 
