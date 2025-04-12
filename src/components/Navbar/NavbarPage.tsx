import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavbarPage.css';
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";



export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

 
    return (
        <nav className="navbar-container">
            <header className="logo"><Link className="a"  to="/home">APOLO<span className="negro">IX</span>CODE</Link></header>
            <ul className="menu-links">
                <li><Link className="a hover:text-gray-400" to='/home'>Inicio</Link></li>
                <li><Link className="a hover:text-gray-400" to="/nosotros" >Nosotros</Link></li>
                <li className="relative">
                    <button
                        className="hover:text-gray-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Docs ▾
                    </button>
                    {isOpen && (
                        <ul className="absolute top-10 bg-gray-200 text-gray-600 rounded-md shadow-lg w-40 ancho">
                            <li className="link-submenu"><Link className="block px-4 py-2 hover:bg-gray-300 link" to="/politicas">Politicas</Link></li>
                            <li  className="link-submenu"><Link className="block px-4 py-2 hover:bg-gray-300" to="/about-apoloONE">ApoloONE</Link></li>
                        </ul>
                    )}
                </li>
                <li className="link-externo "><a className="hover:text-gray-100" href="http://localhost:5174/"  target="_blank">Launch App</a></li>
                <li className="switch"><ThemeSwitcher /></li>
            </ul>
        </nav>
    )
}