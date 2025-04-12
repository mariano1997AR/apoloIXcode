import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { NotFound } from './Pages/NotFound/NotFound'
import { Navbar } from './components/Navbar/NavbarPage'
import { Anuncios } from './Pages/Anuncios/Anuncios'
import { FooterPage } from './components/FooterPage/FooterPage'
import { Nosotros } from './Pages/Nosotros/Nosotros'
import { Politicas } from './Pages/Politicas/Politicas'
import { ProtocoloSeguridad } from './Pages/ProtocoloSeguridad/ProtocoloSeguridad'
import { ApoloONE } from './Pages/ApoloONE/ApoloONE'


function App() {


  return (
    <Router>
          <Navbar />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/about' element={<About />}/>
                <Route path='/anuncios' element={<Anuncios />} />
                <Route path='/politicas' element={<Politicas />}/>
                <Route path='/about-apoloONE' element={<ApoloONE />}/>
                <Route path='*' element={<NotFound />} />
          </Routes>
          <FooterPage />
    </Router>
  )
}

export default App
