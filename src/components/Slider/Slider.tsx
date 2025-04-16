import React, { useEffect, useRef } from "react"
import './Slider.css';
import marketingDigital from '../../assets/brands/marketing-digital.webp';
import facturacion from '../../assets/brands/facturacion.webp';
import imagenArcaArgentina from '../../assets/brands/imagenArca.webp';
import sistemasInformaticos from '../../assets/brands/sistemasInformaticos.webp';
import apoloONELOGO from '../../assets/Logos/apoloONE-LOGO.webp';
import automatizacionSistemas from '../../assets/brands/automaticacionSistemas.webp';
import multitarea from '../../assets/brands/multitarea.webp';
import globalizacion from '../../assets/brands/globalizacion.jpg';
import softwareIntegracion from '../../assets/brands/software-integracion.webp';
import { useTheme } from "../ThemeContext";


//logos

const brands = [
    imagenArcaArgentina,
    sistemasInformaticos,
    apoloONELOGO,
    automatizacionSistemas,
    globalizacion,
    marketingDigital,
    facturacion,
    multitarea,
    softwareIntegracion,
];


export const Slider: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const {theme} = useTheme();

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
        <section className="carousel-container" style={{ backgroundColor: theme === 'dark' ? '#4A4947' : '#F5F5F5' }}>
            <section className='carousel-track' ref={carouselRef}>
                {[...brands, ...brands].map((brand, index) => (
                    <img key={index} src={brand} alt='Brand Logo' className='brand-logo' />
                ))}
            </section>



        </section>
    )
}