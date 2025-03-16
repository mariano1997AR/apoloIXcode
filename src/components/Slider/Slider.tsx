import React, { useEffect, useRef } from "react"
import './Slider.css';
import automatizacion from '../../assets/brands/automatizacion.jpg';
import marketingDigital from '../../assets/brands/marketing-digital.jpg';
import marketingSeo from '../../assets/brands/marketing-seo.jpg';
import facturacion from '../../assets/brands/facturacion.jpg';


//logos

const brands = [
    automatizacion,
    marketingDigital,
    marketingSeo,
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