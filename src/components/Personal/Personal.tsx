import React from "react"
import { Usuarios } from "../types";
import foto2 from '../../assets/brands/facturacion.webp';
import foto3 from '../../assets/brands/automaticacionSistemas.webp';
import { Card } from "../Cards/Card";

export const Personal: React.FC = ()=>{
    const usuariosCard: Usuarios[] = [
        {
            name:"Mariano Martinotti",
            descripcion:"Founder",
            image:foto2
        },
        {
            name:"Luis Mejia",
            descripcion:"Contador Senior",
            image:foto3
        },
        {
            name:"Guillermo Martinotti",
            descripcion:"Sales Senior Adquisition",
            image:foto3
        }
    ];
     return (
         <section >
               <Card usuarios={usuariosCard}></Card>
                
         </section>
     )
}