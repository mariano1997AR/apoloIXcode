import React from "react"
import { CalendlyWidget } from "../../components/CalendlyWidget/CalendlyWidget"
import { Title, Meta } from "react-head"

export const Agendar: React.FC = () => {
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