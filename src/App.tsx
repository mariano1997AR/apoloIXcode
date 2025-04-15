import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
//import { NotFound } from './Pages/NotFound/NotFound'
import { Navbar } from './components/Navbar/NavbarPage'
import { Anuncios } from './Pages/Anuncios/Anuncios'
import { FooterPage } from './components/FooterPage/FooterPage'
import { Nosotros } from './Pages/Nosotros/Nosotros'
import { Politicas } from './Pages/Politicas/Politicas'
import { ApoloONE } from './Pages/ApoloONE/ApoloONE'


function App() {


  return (
    <Router>
          <Navbar />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/apoloIXcode/home' element={<Home />} />
                <Route path='/apoloIXcode/nosotros' element={<Nosotros />} />
                <Route path='/about' element={<About />}/>
                <Route path='/apoloIXcode/anuncios' element={<Anuncios />} />
                <Route path='/apoloIXcode/servicios/politicas' element={<Politicas />}/>
                <Route path='/apoloIXcode/servicios/about-apoloONE' element={<ApoloONE />}/>
                <Route path='*' element={<Home />} />
          </Routes>
          <FooterPage />
    </Router>
  )
}

export default App
