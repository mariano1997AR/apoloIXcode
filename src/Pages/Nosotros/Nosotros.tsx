import React from 'react'
import './Nosotros.css';
import ideaNosotros from '../../assets/publisher/idea-nosotros.webp';
import misionEmpresarial from '../../assets/publisher/mision-empresa.webp';
import { useTheme } from '../../components/ThemeContext';
import { Title, Meta } from 'react-head';
import { Personal } from '../../components/Personal/Personal';


export const Nosotros: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Title>Nosotros | ApoloIXcode</Title>
      <Meta name='description' content='Somos una organización que se dedica a desarrollar software de gestión para empresas pequeñas y grandes en LATAM' />
      <Meta name='keywords' content='apoloixcode, historia de apoloixcode, apoloone como sistema de gestion, sistemas de gestión para empresas ' />
      <Meta property='og:title' content='Nosotros | ApoloIXcode' />

      <section className='nosotros-main' style={{ backgroundColor: theme === 'dark' ? '#4A4947' : '#F5F5F5' }}>
        <section className='flex-nosotros-main' >
          <section className='flex-nosotros-right DesaparecerPC aparecerDispositivo'>
            <img
              src={ideaNosotros}
              alt="Imagen ilustrativa de una idea haciendo referencia a como inicio apoloixcode"
              loading='lazy'
              className='image img-dispositivo'

            />
          </section>
          <section className='flex-nosotros-left'>
            <h2 className="subtitulo text-2xl md:text-3xl font-bold text-center ">¿Cómo comenzo ApoloIXcode?</h2>
            <p className='text-lg mt-4 parrafo'>
              Nació como un proyecto para automatizar tareas administrativas, como la automatizacion de presupuestos
              e gestion de productos y optimizar los costos fijos de las organizaciones.
            </p>
            <p className='text-lg mt-4 parrafo'>
              Analizando el mercado de formas diversas encontré la forma en que podria dar una solución a las organizaciones en el area del comercio.
              Brindando una herramiento como un sistema de gestión donde sea completo, versátil y que sea facil de usar a un precio de mercado. 

            </p>
            <p className='text-lg mt-4 parrafo'>
              Nosotros como organización queremos ayudar a gestionar su emprendimiento de forma eficiente. Mejorar el control de stock y
              la previsión por demanda y tener el control de su negocio. 
            </p>
          </section>
          <section className='flex-nosotros-right DesaparecerDispositivo aparecerPC'>
            <img
              src={ideaNosotros}
              alt="Imagen ilustrativa de una idea haciendo referencia a como inicio apoloixcode"
              loading='lazy'
              className='image'

            />
          </section>
        </section>
        {/* refactorizar el codigo llevandolo a apoloONE */}
        <section className='flex-nosotros-main'>
          <section className='flex-nosotros-left'>
            <img
              src={misionEmpresarial}
              alt="Imagen ilustrativa de un grupo de personas para referenciar la idea de mision como empresa que tiene apoloIXCode"
              loading='lazy'
              className='image image-right img-dispositivo'

            />
          </section>
          <section className='flex-nosotros-right'>
            <h2 className="subtitulo text-2xl md:text-3xl font-bold text-center">Mision empresarial</h2>
            <p className='text-lg mt-4'>
              - "Digitalizar y simplificar la gestión de su organización,
              Ofreciendo una plataforma accesible, eficiente y confiable que integre todos los procesos clave:
              desde la administración hasta la integración con ARCA (exAFIP), permitiendo a las empresas operar
              de forma más ágil, transparente y competitiva."
            </p>
            <p className='text-lg mt-4'>
              - "Brindar una solución integral para la gestión de operaciones de gestión mas previsible,
              automatizando procesos críticos y reduciendo tiempos y errores en la forma de gestionar
              su negocio."
            </p>
            <p className='text-lg mt-4'>
              - "Empoderar a empresas de cualquier tamaño mediante
              tecnología accesible que simplifica la operatoria y fortalece la toma de decisiones."
            </p>

          </section>

        </section>

        {/* Cards de presentacion */}
        <Personal />

      </section>
    </>

  )
}