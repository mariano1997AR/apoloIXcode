import React, { useEffect, useState } from "react"
import './Anuncios.css';
import { Loader } from "../../components/Loader/Loader";


export const Anuncios: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [])

    if(loading){
            return(
                <div className="flex justify-center items-center min-h-[300px]">
                     <Loader />
                </div>
            )
        }
    return (
        <section className="container-anuncio">
            <h2 className="subtitulo text-center py-2">Anuncios</h2>
            <section className="flex-container-anuncios">
                 <section className="flex-left-item">
                        <h2>Hola loco</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsum accusamus incidunt, praesentium tempore enim architecto ut nesciunt reiciendis mollitia nisi vel sunt quis, ullam, dolore fuga magni libero est.
                        Soluta odit quasi perspiciatis asperiores. Possimus maxime inventore asperiores praesentium at aut delectus, excepturi, illo officiis esse dolor molestias? Laboriosam assumenda maxime nam itaque! Vitae omnis facilis vel aspernatur quas!</p>
                 </section>
                 <section className="flex-right-item">
                        <h2>Hola loco2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur minus facilis aperiam officia rerum sed molestiae, natus mollitia culpa nesciunt non earum, repellendus, magni necessitatibus quaerat aliquid! At, beatae exercitationem.</p>
                 </section>
            </section>

            <section className="flex-container-anuncios">
                 <section className="flex-left-item">
                        <h2>Hola loco</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsum accusamus incidunt, praesentium tempore enim architecto ut nesciunt reiciendis mollitia nisi vel sunt quis, ullam, dolore fuga magni libero est.
                        Soluta odit quasi perspiciatis asperiores. Possimus maxime inventore asperiores praesentium at aut delectus, excepturi, illo officiis esse dolor molestias? Laboriosam assumenda maxime nam itaque! Vitae omnis facilis vel aspernatur quas!</p>
                 </section>
                 <section className="flex-right-item">
                        <h2>Hola loco2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur minus facilis aperiam officia rerum sed molestiae, natus mollitia culpa nesciunt non earum, repellendus, magni necessitatibus quaerat aliquid! At, beatae exercitationem.</p>
                 </section>
            </section>
        </section>
    )
}