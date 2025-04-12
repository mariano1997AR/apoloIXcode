import React from "react"
import './FooterPage.css';
import { Link } from "react-router-dom";
export const FooterPage: React.FC = () => {
    return (
        <footer className='container-footer'>
            <section className='columna-container'>
                <article className='columna-redes-sociales'>
                    <ul className='submenu-redesociales'>
                        <li className="logo"> APOLO<span className="negro">IX</span>CODE</li>
                    </ul>

                </article>
                <article className='columna-redes-sociales'>
                    <ul>
                        <li className='subtitulo-footer'><b>Nuestra politicas</b></li>
                        <li><Link to='/politicas'>Politicas de privacidad</Link></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Seguridad</a></li>
                    </ul>
                </article>

                <article className='columna-redes-sociales'>
                    <ul>
                        <li className='subtitulo-footer'><b>Sociales</b></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/apoloixcode/?viewAsMember=true">Linkedln</a></li>
                        <li><Link to='/anuncios'>Anuncios</Link></li>
                        <li><a target="_blank" href="https://x.com/apoloixcode">X</a></li>
                    </ul>
                </article>
            </section>

            <section className='top-line-copy'>
                <ul className='submenu-enterprise-footer'>
                    <li>Copyright 2025 - <span className='mark-company'>Apolo<span className='white'>IX</span>code</span></li>
                    <li><a></a></li>
                    <li><a href="#">Proximos Productos</a></li>
                </ul>
            </section>

        </footer>
    )
}