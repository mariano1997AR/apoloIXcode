import React from "react"
import './ApoloONE.css';
import sistemaApoloGestion from '../../assets/publisher/sistema-gestion-apolo.webp';
import logoApoloONE from '../../assets/Logos/apoloONE-LOGO.webp';

export const ApoloONE: React.FC = () => {
    return (
        <section className="container-about-apolo">
            <section className="flex-about-main">
                <section className='flex-about-left'>
                    <article>
                        <h2 className="subtitulo text-2xl md:text-3xl font-bold text-center">¿Qué es ApoloONE?</h2>
                        <p className='text-lg mt-4 parrafo'>
                            Es una aplicación de gestion orientado a comercios donde vas a poder gestionar
                            inventarios(stocks), operaciones,  logística, pagos a proveedores.
                        </p>
                    </article>
                    <article className="text-2">
                        <h3 className="subtitulo font-bold text-2xl ">Aplicaciónes modulares</h3>
                        <ul>
                            <li className="py-2">1. Módulo de gestión de inventarios y stock</li>
                            <li className="py-2">2. Módulo de Punto de venta (POS/TPV)</li>
                            <li className="py-2">3. Módulo de gestión de compras y proveedores</li>
                            <li className="py-2">4. Módulo de Reportes y estadísticas</li>
                            <li className="py-2">5. Módulo de gestión de usuarios y roles</li>
                            <li className="py-2">6. Accesibilidad </li>
                            <li className="py-2">7. Configuración y Administración</li>
                        </ul>
                    </article>

                </section>
                <section className="flex-about-right">
                    <img
                        src={sistemaApoloGestion}
                        alt="Imagen ilustrativa de un sistema para referenciar la idea de como nacio apoloONE como sistema de gestion"
                        loading='lazy'
                        className='image image-right'

                    />
                </section>
            </section>
            <section className="flex-about-main">
                <section className='flex-about-left'>
                    <img
                        src={logoApoloONE}
                        alt="Imagen ilustrativa de importadores para referenciar la idea de como nacio apoloONE como sistema de gestion"
                        loading='lazy'
                        className='image-right'

                    />

                </section>
                <section className="flex-about-right">
                    <h3 className="subtitulo font-bold ">Características de apoloONE</h3>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Gestión de inventarios y stock</h4>
                        <ul>
                            <li> - Control en tiempo real del stock disponible.</li>
                            <li> - Alertas de productos con bajo stock o vencimientos.</li>
                            <li> - Soporte para códigos de barras y escaneo rápido.</li>
                            <li> - Gestión por lotes, fechas de vencimiento y proveedores.</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Punto de venta (POS/TPV)</h4>
                        <ul>
                            <li> - Interfaz rápida y fácil para cajeros.</li>
                            <li> - Soporte para múltiples métodos de pago (efectivo, débito,QR,etc).</li>
                            <li> - Impresión automática de tickets/facturas.</li>
                            <li> - Apertura y cierre de caja con control de movimientos.</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de facturación electrónica</h4>
                        <ul>
                            <li> - Generación automática de comprobantes fiscales (Factura A,B, Ticket).</li>
                            <li> - Integración con AFIP (u otro ente tributario)</li>
                            <li> - Registro automático de ventas por día/turno</li>
                      
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Gestión de compras y proveedores</h4>
                        <ul>
                            <li> - Gestión de clientes y proveedores internacionales.</li>
                            <li> - Contactos por país, historial de operaciones y cotizaciones.</li>
                            <li> - Mailing automatizado de novedades de embarques o documentación pendiente</li>
                        </ul>
                    </article>

                </section>
            </section>
        </section>
    )
} 