import React from 'react';
// import styles from '../../src/App.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../src/App.module.css';

export default function Detail() {

    const { detailId } = useParams();
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/home");
    };
    const [character, setCharacter] = useState({
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: "",
        imagen: ""
    });


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter({
                        name: char.name,
                        status: char.status,
                        species: char.species,
                        gender: char.gender,
                        origin: char.origin.name,
                        image: char.image
                    });

                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });

    }, [detailId]);

    return (
        <div  >

            <div className={styles.divPrin}>

                <div style={{ textAlign: "left", fontSize: "24px" }}>
                    <p>Nombre: {character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Genero: {character.gender}</p>
                    <p>Origin: {character.origin}</p>
                </div>

                <img className={styles.img} alt={'Picture of: ' + character.name} src={character.image} />
            </div>
            <button className={styles.styleButton} onClick={backToHome}>Home!</button>
        </div>
    );
}