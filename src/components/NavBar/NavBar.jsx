//react
import React from 'react'
import { Link } from 'react-router-dom'

//MUI components
import CottageIcon from '@mui/icons-material/Cottage';

//components
import Filter from '../Menu/Menu'
import CartWidget from '../CartWidget/CartWidget'

//styles
import './NavBar.css'

const NavBar = () => {
    


    return (
        <div className='division_top'>
            <nav>
                <ul>
                    <div className='links'>
                        <Link to="/" ><CottageIcon/></Link> 
                        <Filter />
                        <Link className='li' to="/contact">Contacto</Link>
                        <Link className='li' to="/about">Sobre Nosotros</Link>
                    </div>
                    <div className='notification_bar'>
                        <li><CartWidget /></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar