import React from "react"
import './FooterPage.css';
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
export const FooterPage: React.FC = () => {
    const { theme } = useTheme();
    return (
        <footer className='container-footer'>
            <section className="container-footer-pc">
                <section className='columna-container desaparecer-columnas'>
                    <article className='columna-redes-sociales'>
                        <ul className='submenu-redesociales'>
                            <li className="logo"> APOLO<span className="negro">IX</span>CODE</li>
                        </ul>

                    </article>
                    <article className='columna-redes-sociales'>
                        <ul >
                            <li className='subtitulo-footer'><b>Nuestra politicas</b></li>
                            <li><Link to='/servicios/politicas' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Politicas de privacidad</Link></li>
                            <li><Link to='/servicios/politicas' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Terminos y condiciones</Link></li>
                            <li><a href="#" className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Seguridad</a></li>
                        </ul>
                    </article>

                    <article className='columna-redes-sociales'>
                        <ul>
                            <li className='subtitulo-footer'><b>Sociales</b></li>
                            <li><a target="_blank" className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.linkedin.com/company/apoloixcode/?viewAsMember=true">Linkedln</a></li>
                            <li><Link to='/anuncios' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Anuncios</Link></li>
                            <li><a target="_blank" className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://x.com/apoloixcode">X</a></li>
                        </ul>
                    </article>
                </section>

                <section className='top-line-copy' style={{ borderTopColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                    <ul className='submenu-enterprise-footer'>
                        <li>Copyright 2025 - <span className='mark-company'>Apolo<span className="naranja">IX</span>code</span></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><Link to='/medios-pagos' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} >Medios de Pagos</Link></li>
                    </ul>
                </section>

            </section>
            <section className="container-footer-dispositivos">
                <header className="logo-dispositivo">APOLO<span className="naranja">IX</span>CODE</header>
                <ul className="submenu-footer-dispositivo">
                    <li><Link to='/politicas' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}> Politica de privacidad</Link></li>
                    <li><a target="_blank"  style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.linkedin.com/company/apoloixcode/?viewAsMember=true">Linkedln</a></li>
                    <li><Link to='/anuncios' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Anuncios</Link></li>
                    <li><a target="_blank"  style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://x.com/apoloixcode">X</a></li>
                </ul>
                <footer className="copyright-dispositivo" style={{ borderTopColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                    <p className="copyright-logo-act">Copyright 2025™</p>
                </footer>
            </section>

        </footer>
    )
}