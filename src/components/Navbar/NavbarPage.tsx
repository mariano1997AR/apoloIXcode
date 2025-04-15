import React from "react";
import { Link } from "react-router-dom";
import './NavbarPage.css';
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../ThemeContext";



export const NavbarPage: React.FC = () => {
   /* const [isOpen, setIsOpen] = useState(false);*/
    const { theme } = useTheme();


    return (
        <nav className="navbar-container" style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
            <section className="switch-responsive"><ThemeSwitcher /></section>
            <header className="logo"><Link className="a " style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} to="/home">APOLO<span className="negro">IX</span>CODE</Link></header>

            <ul className="menu-links">
                <li className="linea-bottom"><Link className="a" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to='/home'>Inicio</Link></li>
                <li className="linea-bottom"><Link className="a hover:text-gray-400" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to="/nosotros" >Nosotros</Link></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Servicios</a>
                    <ul className="dropdown-menu mt-4">
                        <li><Link className="dropdown-item item-link-menu" to='/servicios/about-apoloONE'>ApoloIXCODE</Link></li>
                        <li><Link className="dropdown-item item-link-menu" to='/servicios/politicas'>Terminos y condiciones</Link></li>
                       
                    </ul>
                </li>
                <li className="linea-bottom"><Link className="a hover:text-gray-400 mb-2" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to=''>Contacto</Link></li>
               <li className="link-externo  "><a className="solicitar-demo" href="http://localhost:5174/" target="_blank">Solicita una Demo</a></li>
                <li className="switch "><ThemeSwitcher /></li>
            </ul>
        </nav>
    )
}