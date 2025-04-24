import React from 'react'
import logo from "../../assets/Dragon_Ball_Z_Logo_C.png";
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Dragon Ball" className="header-logo" />
      <h1>Dragon Ball API</h1>
    </header>
  )
}

export default Header