import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { NotFound } from './Pages/NotFound/NotFound'
import { Navbar } from './components/Navbar/NavbarPage'
import { Productos } from './Pages/Productos/Productos'
import { Anuncios } from './Pages/Anuncios/Anuncios'
import { FooterPage } from './components/FooterPage/FooterPage'


function App() {


  return (
    <Router>
          <Navbar />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/about' element={<About />}/>
                <Route path='/anuncios' element={<Anuncios />} />
                <Route path='*' element={<NotFound />} />
          </Routes>
          <FooterPage />
    </Router>
  )
}

export default App
