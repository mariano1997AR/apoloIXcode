import React from "react"
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination,Navigation,Autoplay } from "swiper/modules";
import './Card.css';
import { Usuarios } from "../types";



interface ListarDatosProps{
    usuarios:Usuarios[];
}



export const Card: React.FC<ListarDatosProps> = ({usuarios}) => {
    return (
       <Swiper
           modules={[Navigation,Pagination,Autoplay]}
           spaceBetween={20}
           slidesPerView={3}
           autoplay={{
            delay: 2500, // tiempo entre slides (en ms)
            disableOnInteraction: false, // sigue aunque el usuario interactúe
            pauseOnMouseEnter: true, // se pausa al pasar el mouse
          }}
           navigation
           pagination={{clickable:true}}
           speed={800}
           grabCursor
           breakpoints={{
                0:{slidesPerView:1},
                620:{slidesPerView:2},
                1024:{slidesPerView:3},
           }}
           className="w-full max-w-6xl mx-auto py-6"
       
       >
      {usuarios.map((card, index) => (
        <SwiperSlide key={index}>
             <section className="slider-wrapper rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                 <section className="card-list">
                      <section className="card-item">
                             <img 
                                src={card.image} 
                                alt={card.descripcion} 
                                className="user-image"
                                loading="lazy"
                            />
                            <h2 className="user-name">{card.name}</h2>
                            <p className="user-profession">{card.descripcion}</p>
                            <button className="message-button">Mensaje</button>
                      </section>

                 </section>
                 
                 
             </section>
             
        </SwiperSlide>
       
        
      ))}
       </Swiper>
       
    )
}