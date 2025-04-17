import './NavBar.css'
import React from 'react'

import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <ul>

          <Link to={"/"} >Inicio</Link>
          <Link to={"/filter/Male"} >Masculino</Link>
          <Link to={"/filter/Female"} >Femenino</Link>
          <Link to={"/about"} >Acerca de</Link>
          


        </ul>
    </nav>
  )
}

export default NavBar