//react
import React from 'react'
import {Link} from 'react-router-dom'

//components
import banner from "../../assets/images/checkpoint_games.png"

//styles
import "./Header.css"

const Header = () => {
    return (
        <div>
            <p className='welcome_message'>Bienvenido/a a nuestra tienda online!!!🛒</p>
            <div className='header_container'>
                <div className='banner'>
                    <Link to='/'>
                    <img src={banner}  alt="CheckPoint Games" /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header