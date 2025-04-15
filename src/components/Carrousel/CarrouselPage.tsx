import React from "react"
import caracteristicas from '../../assets/publisher/Caracteristicas-apoloONE.webp';
import foto2 from '../../assets/publisher/mision-empresa.webp';
import foto3 from '../../assets/brands/facturacion.webp';
import './CarrouselPage.css';




export const CarrouselPage: React.FC = () => {
    return (
        <section className="container-carrousel">

            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                        <img 
                           src={caracteristicas} 
                           alt="Imagen ilustrativa sobre la aplicacion de gestion apoloONE" 
                           className="img-fluid zoom-hover responsive" 
                           loading="lazy"
                           />
                    </div>
                    <div className="carousel-item ">
                        <img src={foto2} alt="Chicago" className="img-fluid zoom-hover responsive" />
                    </div>
                    <div className="carousel-item  ">
                        <img src={foto3} alt="New York" className="img-fluid zoom-hover responsive" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            

        </section>
    )
}