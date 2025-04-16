import React, { useEffect, useState } from "react"
import { CalendlyWidget } from "../../components/CalendlyWidget/CalendlyWidget"
import { Title, Meta } from "react-head";
import { Loader } from "../../components/Loader/Loader";

export const Agendar: React.FC = () => {
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
           const timeout = setTimeout(()=>{
              setLoading(false);
           },4500);

           return ()=> clearTimeout(timeout);
    },[]);

    if(loading){
        return(
            <div className="flex justify-center items-center min-h-[300px]">
                 <Loader />
            </div>
        )
    }
    return (
        <>
            <Title>Agendar reunion | ApoloIXcode</Title>
            <Meta name="description" content="reserva un turno para conocer mas sobre apoloxicode, integramos calendly para manejar reuniones, toma tu decisión con apoloixcode" />
            <Meta name="keywords" content="reunion con apoloixcode, reunion con representante, necesito un sistema de gestión, sistema de gestión, como tener un sistema de gestión"/>
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Reservá una Reunion</h1>
                <CalendlyWidget />
            </section>
        </>

    )
}