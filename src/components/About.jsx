import React from "react";
import fotoPerfil from "../assets/fotoPerfil.jpeg"
import styles from '../../src/App.module.css';



export default function About() {


    return (
        <div>
            <div className={styles.about} >
            <div><img className={styles.aboutImg} src={fotoPerfil} alt={'Foto de creador'} /></div>
                <h1>Hola, estas en la About page!</h1>
                <h2>Conoceras un poco acerca de mi y de la App!</h2>

                <p>Hola mi nombre es Daniel Ocampo Carvajal! Soy ingeniero Civil de profesion, Me gradue hace 4 anos de la Universidad llevo trabajando 3 anos y actualmente trabajo para una empresa de estados unidos disenando planos de viviendas y haciendo diseno viales y de topografia, decidi iniciar mi camino de programador gracias a unis familaires que son ingenieros de sistemas y me motivaron a empezar a buscar un futuro mejor.</p>
                <p>La App que estas navegado en este momento es un proyecto de integracion que debemos realiaar para aporbar el modulo 2 de un curso de Full Stack Devoloper de la empreza llamada SoyHenry, que tiene un bootcamp que prepara a las personas para ser desarrolladores web FullStack!</p>
            </div>
            
        </div>



    );
}