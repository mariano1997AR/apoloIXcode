import './App.css'
import {Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
//import { NotFound } from './Pages/NotFound/NotFound'
import { Anuncios } from './Pages/Anuncios/Anuncios'
import { Nosotros } from './Pages/Nosotros/Nosotros'
import { Politicas } from './Pages/Politicas/Politicas'
import { ApoloONE } from './Pages/ApoloONE/ApoloONE'
import { Layout } from './components/Layout/Layout'
import { Contacto } from './Pages/Contacto/Contacto'
import { Agendar } from './Pages/Agendar/Agendar'


function App() {


  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/about' element={<About />} />
        <Route path='/anuncios' element={<Anuncios />} />
        <Route path='/servicios/politicas' element={<Politicas />} />
        <Route path='/servicios/about-apoloONE' element={<ApoloONE />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/agendar' element={<Agendar />} />

        <Route path='*' element={<Home />} />
      </Route>
    </Routes>

  )
}

export default App
