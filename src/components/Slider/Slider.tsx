import React, { useEffect, useRef } from "react"
import './Slider.css';
import marketingDigital from '../../assets/brands/marketing-digital.jpg';
import facturacion from '../../assets/brands/facturacion.jpg';
import imagenArcaArgentina from '../../assets/brands/imagenArca.jpg';
import sistemasInformaticos from '../../assets/brands/sistemasInformaticos.png';
import containers from '../../assets/brands/container-publisher-sizes.jpg';
import automatizacionSistemas from '../../assets/brands/automaticacionSistemas.png';
import brandBarcoComercial from '../../assets/brands/barco-comercio-noche.jpg';
import globalizacion from '../../assets/brands/globalizacion.jpg';


//logos

const brands = [
    imagenArcaArgentina,
    sistemasInformaticos,
    containers,
    automatizacionSistemas,
    brandBarcoComercial,
    globalizacion,
    marketingDigital,
    facturacion,
];


export const Slider: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                //Va hacia la izquierda de forma de scroll
                //va hacia la izquierda de forma de scroll
                carouselRef.current.scrollLeft += 1;
                if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scrollCarousel);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="carousel-container">
            <section className='carousel-track' ref={carouselRef}>
                {[...brands, ...brands].map((brand, index) => (
                    <img key={index} src={brand} alt='Brand Logo' className='brand-logo' />
                ))}
            </section>



        </section>
    )
}