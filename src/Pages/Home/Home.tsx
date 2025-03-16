import React from "react"
import './Home.css';
import logo from '../../assets/publisher/svg-foto-publisher.svg';
import logo2 from '../../assets/publisher/grafico-barra.svg';
import { Link } from "react-router-dom";
import { Slider } from "../../components/Slider/Slider";
import { Time } from "../../components/Tiempo/Time";


export const Home: React.FC = () => {
    return (
        <main>
            <section className="home-container">
                {/* crear un componente de main */}
                <section className="flex flex-col md:flex-row h-[30rem] pt-50 w-full redesize">

                    <section className="w-full md:w-1/2 p-6 flex flex-col justify-center home-container">
                        <h1 className="titulo text-2xl md:text-3xl font-bold ">Potencia tus ventas con nuestro sistema</h1>
                        <span className="borde"></span>
                        <p className="text-lg mt-4">
                            Invierte en tu negocio, con nuestra herramienta Atlantis
                        </p>
                        {/*<a className="hover:text-gray-400 text-2xl pt-3" href="http://localhost:5174/" target="_blank">Launch App</a>
                     */}
                    </section>
                    <img
                        src={logo}
                        alt="Publicacion de un grafico de negocios"
                        loading="lazy"
                        width={500}

                    />
                </section>
                <section className="flex flex-col md:flex-row h-screen w-full  redesize">
                    <img
                        src={logo2}
                        alt="Publicacion de un grafico de barras en representacion de las ganancias"
                        loading="lazy"
                        width={500}
                    />

                    <section className="w-full md:w-1/2 p-6 flex flex-col justify-center home-container">
                        <h2 className="subtitulo text-2xl md:text-3xl font-bold ">Nuestras Herramientas pueden Agilizar tu trabajo</h2>
                        <span className="borde"></span>
                        <p className="text-lg mt-4">
                            Mediante el uso de analisis de metricas y de datos para que tu organizacion
                            pueda obtener mejores resultados en tu ecommerce
                        </p>
                        <span className="borde-interno"></span>
                        <h3 className="text-2xl md:text-3xl font-bold ">¿Como podemos Ayudarte?</h3>
                        <p className="text-lg mt-4 pb-5">
                            Apoloixcode mediante el sistema atlantis podras realizar diferentes tareas donde vas
                            a usar nuestras herramientas de analisis de metricas de Kpi's (Indicador clave de rendimiento)
                        </p>
                        <span className="borde-interno"></span>
                        <h3 className="text-2xl md:text-3xl font-bold pb-3">Pago a proveedores</h3>
                        <p className="text-lg mt-4">
                            Tambien podras pagar a proveedores con una base de datos de la misma insertando tu excel o haciendolo en nuestro formulario
                        </p>

                        {/*<a className="hover:text-gray-400 text-2xl" ><Link className="a hover:text-gray-400  pt-5 pb-2" to="/productos" >Productos</Link></a>
                        */}
                    </section>
                </section>
            </section>
            <Slider />
            {/* crear un componente */}
            <section className="container-anuncios">
                <article className="anuncio">
                    <h3 className="text-3xl pt-10 ">Último Anuncios</h3>
                    <div className="border-anuncios"></div>
                    <section>
                        <span className="border-anuncio"></span>
                        <section className="container-anuncios-Internal">
                            <article className="anuncio-one">
                                <Time />
                                <h2><b>Lanzamiento de ApoloOne</b></h2>
                                <p className="border-anuncios"></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis culpa perspiciatis pariatur, eligendi neque expedita, tempore et provident error soluta veniam velit adipisci accusamus veritatis optio officia autem molestiae.</p>
                            </article>
                            <article className="anuncio-two">
                                <Time />
                                <h2><b>Publicacion del sitio web de ApoloIXcode</b></h2>
                                <p className="border-anuncios"></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque at maxime consequatur cum incidunt, optio quasi. Vero sed repellendus, dicta minus voluptatum quasi minima dolorum aliquid! Accusantium, voluptatibus eligendi.</p>
                            </article>
                        </section>
                    </section>
                </article>
                <button className="btn-1 btn-apolo"><Link to="/anuncios">Mostrar Anuncios</Link></button>
            </section>
        </main>






    )
}