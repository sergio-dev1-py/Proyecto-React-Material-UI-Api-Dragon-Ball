import React from 'react'
import fondoImage from "../../../assets/Imagen_fondo_del.jpg";

import CardAbout from '../../CardAbout/CardAbout'

const PaginaAbout = () => {
  return (
    <main style={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '10px',
      alignItems: 'center', 
      padding:  '20px clamp(5px, 4vw, 50px)',
      backgroundColor: "rgb(76, 76, 109)",
      }}>

        <CardAbout/>
    </main>
  )
}

export default PaginaAbout