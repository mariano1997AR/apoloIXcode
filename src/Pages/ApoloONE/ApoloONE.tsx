import React from "react"
import './ApoloONE.css';
import importadores from '../../assets/publisher/importadores-docks.webp';
import logoApoloONE from '../../assets/Logos/apoloonelogo.webp';

export const ApoloONE: React.FC = () => {
    return (
        <section className="container-about-apolo">
            <section className="flex-about-main">
                <section className='flex-about-left'>
                    <article>
                        <h2 className="subtitulo text-2xl md:text-3xl font-bold text-center">¿Qué es ApoloONE?</h2>
                        <p className='text-lg mt-4 parrafo'>
                            Es una aplicación de gestion orientado a COMEX (comercio exterior) donde se va a poder gestionar
                            inventarios(stocks), operaciones, aduanas, logística,transporte y CRM (CUSTOM RELATIONAL MANAGMENT)
                        </p>
                    </article>
                    <article className="text-2">
                        <h3 className="subtitulo font-bold text-2xl ">Aplicaciónes modulares</h3>
                        <ul>
                            <li className="py-2">1. Módulo de gestión de inventarios</li>
                            <li className="py-2">2. Módulo de operaciones de comercio exterior</li>
                            <li className="py-2">3. Módulo Aduanero</li>
                            <li className="py-2">4. Módulo de logística y transporte</li>
                            <li className="py-2">5. CRM de comercio exterior</li>
                            <li className="py-2">6. Dashboard & Reportes</li>
                            <li className="py-2">7. Configuración y Administración</li>
                        </ul>
                    </article>

                </section>
                <section className="flex-about-right">
                    <img
                        src={importadores}
                        alt="Imagen ilustrativa de importadores para referenciar la idea de como nacio apoloONE como sistema de gestion"
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
                        <h4 className="subtitulo-modulo">Módulo de gestión de inventarios</h4>
                        <ul>
                            <li> - Alta, baja y modificación de productos</li>
                            <li> - Codigos HS (o código del sistema armonizado)</li>
                            <li> - Control de stock por depósito, en tránsito y por estado aduanero</li>
                            <li> - Previsión de stock por demanda histórica y lead time de importación.</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de operaciones</h4>
                        <ul>
                            <li> - Gestión de expedientes de importación/exportación</li>
                            <li> - Seguimiento de embarques (tracking marítimo, aéreo y terrestre)</li>
                            <li> - Cálculo de costos CIF ,FOB, DDP</li>
                            <li> - Carga de documentos: facturas proforma, comerciales, B/L,packing list, certificados de origen</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo Aduanero</h4>
                        <ul>
                            <li> - Simulación de derechos e impuestos aduaneros (calculadora de importación/exportación)</li>
                            <li> - Gestión de despachos: despachante asignado, estado AFIP,SIRA/SIMI/SOFA</li>
                            <li> - Géstion de permisos: SENASA, ANMAT, INAL, etc</li>
                            <li> - Integración futura con API de la AFIP o servicios de consulta de SIRA (Si puede realizarse)</li>
                        </ul>
                    </article>
                    <article className="modulos-app">
                        <h4 className="subtitulo-modulo">Módulo de CRM</h4>
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