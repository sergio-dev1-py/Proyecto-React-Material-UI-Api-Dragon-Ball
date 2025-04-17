import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import PaginaInicio from './Components/Pages/PaginaInicio/PaginaInicio'
import PaginaFiltro from './Components/Pages/PaginaFiltro/PaginaFiltro'
import PaginaDetalles from './Components/Pages/PaginaDetalles/PaginaDetalles'
import PaginaError from './Components/Pages/PaginaError/PaginaError'
import PaginaAbout from './Components/Pages/PaginaAbout/PaginaAbout'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<PaginaInicio />} />
          <Route path='/filter/:genero' element={<PaginaFiltro />} />
          <Route path='/details/:id' element={<PaginaDetalles />} />
          <Route path='/about' element={<PaginaAbout />} />
          <Route path='*' element={<PaginaError />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      

    </>
  )
}

export default App