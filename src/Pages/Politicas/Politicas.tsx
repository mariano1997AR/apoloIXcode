import { useTheme } from '../../components/ThemeContext';
import './Politicas.css';
import React from "react"



export const Politicas: React.FC = () => {
    const {theme} = useTheme();
    
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    return (
        <section className="container-politica-privacidad" style={{border:theme === "dark" ? "1px solid #fff":"1px solid #000"}}>
            <section className='container-politicas'>
                <article className='terminos-condiciones'>
                    <p className='terminos-privacidad'><u>TÉRMINOS Y CODICIONES DE USO</u></p>             
                    <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                    <p>Estos Términos regular el uso de la aplicación <strong>ApoloONE</strong>. Al acceder o usar la app, aceptás estos términos.</p>
                </article>
                <article className='pb-3 py-3'>
                    <p><b>1. Uso permitido</b></p>
                    <p> * Te otorgamos una licencia no exclusiva y revocable para usar la app solo para fines personales o comerciales autorizados.</p>
                </article>
                <article className='pb-3'>
                    <p><b>2. Cuenta de usuario</b></p>
                    <p>* Sos responsable de la confidencialidad de tus credenciales. No compartas tu cuenta ni la uses para actividad no permitidas</p>
                </article>
                <article className='pb-3'>
                    <p><b>Propiedad intelectual</b></p>
                    <p>
                        * Todo el contenido y código de la app es propiedad de APOLOIXCODE. Esta prohibida su reproducción sin autorización.
                    </p>
                </article>
                <article className='pb-3'>
                    <p><b>4. Prohibiciones</b></p>
                    <p>
                        No podes:
                    </p>
                    <ul>
                        <li>* Usar la app con fines ilegales</li>
                        <li>* Intentar acceder sin autorización a nuestros sistemas</li>
                        <li>* Modificar o hacer ingenieria inversa sobre la app</li>
                    </ul>
                </article>
                <article className='pb-3'>
                    <p><b>5. Limitación de responsabilidad</b></p>
                    <p>* No garantizamos que la app esté libre de errores. No somos responsables por daños derivados del uso
                        o imposibilidad de uso de la app.
                    </p>
                </article>
                <article>
                    <p><b>6. Terminación</b></p>
                    <p>* Podemos suspender o cancelar tu acceso a la app en cualquier momento si incumplís estos términos.</p>
                </article>
            </section>
            <section className='container-privacidad'>
                <article className='politica-privacidad pb-3'>
                     <p className='terminos-privacidad'><u>POLÍTICA DE PRIVACIDAD</u></p>
                     <p className='py-3'>APOLOIXCODE</p>
                     <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                     <p>
                        En APOLOIXCODE, valoramos tu privacidad y nos comprometemos a proteger tus datos 
                        personales. Esta Política de Privacidad describe cómo recopilamos, usamos y 
                        protegemos la información que nos proporcionas al utilizar nuestra aplicación.
                     </p>              
                </article>
                <article className='pb-3 py-2'>
                     <p><b>1. Información que recopilamos</b></p>
                     <ul>
                         <li>* <b>Datos personales: </b> Nombre, correo electrónico, número de teléfono,etc.</li>
                         <li>* <b>Datos de uso: </b>Información sobre cómo usas la app (horario de uso, secciones visitadas)</li>
                         <li>* <b>Ubicación: </b>Solo si la función lo requiere y con tu consentimiento.</li>
                     </ul>
                </article>
                <article className='pb-3 py-2'>
                     <p><b>2.Uso de la información</b></p>
                     <p>
                        Utilizamos tus datos para:
                     </p>
                     <ul>
                        <li>* Proveer nuestros servicios</li>
                        <li>* Mejorar la experiencia de usuario</li>
                        <li>* Comunicarnos contigo con fines operativos o comerciales (previo consentimiento)</li>
                        <li>* Cumplir con obligaciones legales.</li>
                     </ul>
                </article>
                <article className='pb-3 py-2'>
                    <p><b>3.Compartición de la información</b></p>
                    <p>No compartimos tus datos personales con terceros, salvo que:</p>
                    <ul>
                        <li>* Tengamos tu consentimiento explícito.</li>
                        <li>* Sea requerdio por ley</li>
                        <li>* Sea necesario para operar la app (por ejemplo, servicios de hosting o analítica)</li>
                    </ul>
                </article>
                <article className='pb-3 py-2'>
                     <p><b>4. Seguridad de los datos</b></p>
                     <p> * Aplicamos medidads técnicas y organizativas para proteger tus datos contra acceso no autorizados,
                        alteraciones o pérdidas.
                     </p>
                </article>
                <article className='pb-3 py-2'>
                    <p><b>5. Tus derechos</b></p>
                    <p>
                        * Podés acceder, rectificar o eliminar tus datos personales, así como oponerte a ciertos tratamientos. 
                        Para ello, escribirnos a apoloixcode@gmail.com.ar
                    </p>
                </article>
                <article className='pb-3 py-2'>
                    <p><b>6. Cambios en esta política</b></p>
                    <p>* Nos reservamos el derecho de modificar esta Política de Privacidad. Te notificaremos 
                        cualquier cambio relevante.
                    </p>
                </article>
            </section>


        </section>
    )
}