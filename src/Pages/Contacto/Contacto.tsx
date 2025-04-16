import React from "react"
import { Usuarios } from "../../components/types"; 
import whatsapp from '../../assets/contactos/whatsapp.webp';
import gmail from '../../assets/contactos/gmail.webp';
import linkedln from '../../assets/contactos/linkedin.webp';
import {Card} from '../../components/Cards/Card';

import './Contacto.css';

export const Contacto: React.FC = ()=>{
     const mediosContacto:Usuarios[] = [
        {
            name:"Whatsapp",
            descripcion:"Contactame por whatsapp...",
            image:whatsapp

        },
        {
            name:"GMAIL",
            descripcion:"Contactame por correo electronico...",
            image:gmail
        },
        {
            name:"Linkedln",
            descripcion:"Contactame por linkedln...",
            image:linkedln
        }

     ]
     return (
         <section className="container-contacto">
            <h2 className="text-center py-5 pb-5">Medios de contacto</h2>
              <Card usuarios={mediosContacto}></Card>
     
         </section>
     )
}