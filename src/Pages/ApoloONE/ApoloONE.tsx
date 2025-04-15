import React from "react"
import './ApoloONE.css';
import sistemaApoloGestion from '../../assets/publisher/sistema-gestion-apolo.webp';
import logoApoloONE from '../../assets/Logos/apoloONE-LOGO.webp';

export const ApoloONE: React.FC = () => {
    return (
        <section className="container-about-apolo">
            <section className="flex-about-main">
                <section className="flex-about-right  DesaparecerPC aparecerDispositivo ">
                    <img
                        src={sistemaApoloGestion}
                        alt="Imagen ilustrativa de un sistema para referenciar la idea de como nacio apoloONE como sistema de gestion"
                        loading='lazy'
                        className='image image-right img-dispositivo '

                    />
                </section>
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
                            <li className="py-2">1. Módulo de gestión de Productos</li>
                            <li className="py-2">2. Módulo de gestión de Stock</li>
                            <li className="py-2">3. Módulo de Punto de Venta (POS)</li>
                            <li className="py-2">4. Módulo de gestión de Clientes</li>
                            <li className="py-2">5. Módulo de Reportes y estadísticas</li>
                            <li className="py-2">6. Modulo de usuario</li>
                            <li className="py-2">7. Configuración y Administración</li>
                        </ul>
                    </article>

                </section>
                <section className="flex-about-right DesaparecerDispositivo aparecerPC ">
                    <img
                        src={sistemaApoloGestion}
                        alt="Imagen ilustrativa de un sistema para referenciar la idea de como nacio apoloONE como sistema de gestion"
                        loading='lazy'
                        className='image image-right '

                    />
                </section>
            </section>
            <section className="flex-about-main">
                <section className='flex-about-left'>
                    <img
                        src={logoApoloONE}
                        alt="Imagen ilustrativa de importadores para referenciar la idea de como nacio apoloONE como sistema de gestion"
                        loading='lazy'
                        className='image-right img-dispositivo '

                    />

                </section>
                <section className="flex-about-right">
                    <h3 className="subtitulo font-bold ">Características de apoloONE</h3>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Gestión de Productos</h4>
                        <ul>
                            <li> - Alta, baja y modificación de productos.</li>
                            <li> - Códigos de barras,categorías,marcas.</li>
                            <li> - Stock mínimo y máximo.</li>
                           
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Gestión de Stock</h4>
                        <ul>
                            <li> - Entradas y salidas de mercaderia</li>
                            <li> - Reposición automática.</li>
                            <li> - Alertas por bajo stock.</li>
                           
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Punto de Venta (POS)</h4>
                        <ul>
                            <li> - Terminal de caja con escáner y ticket.</li>
                            <li> - Métodos de pago (efectivo, tarjeta, QR).</li>
                            <li> - Cierres de caja y arqueos.</li>

                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Gestión de Clientes</h4>
                        <ul>
                            <li> - Registro de clientes frecuentes.</li>
                            <li> - Programas de fidelización y descuentos.</li>
                            <li> - Historial de compras.</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Reportes y estadísticas</h4>
                        <ul>
                            <li> - Ventas diarias, mensuales, anuales.</li>
                            <li> - Productos más vendidos.</li>
                            <li> - Rentabilidad por categoria.</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Usuarios</h4>
                        <ul>
                            <li> - Permitir roles y permisos (administrador, cajero,reponedor).</li>
                            <li> - Registro de auditoria.</li>
                           
                        </ul>
                    </article>
                    {/* actualizacion
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de Facturacion y documentación</h4>
                        <ul>
                            <li> - Facturación electrónica (AFIP en argentina).</li>
                            <li> - Tickets y comprobantes.</li>
                            <li> - Integracion con impresoras fiscales.</li>
                        </ul>
                    </article>*/}

                </section>
            </section>
        </section>
    )
} 