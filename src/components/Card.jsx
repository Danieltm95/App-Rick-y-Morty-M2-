import React from 'react';
import styles from '../../src/App.module.css';
import { Link } from 'react-router-dom';


export default function Card(props) {

   return (
      <div className={styles.indvCard}>
         <button className={styles.button} onClick={props.onClose}>X</button>
         <Link style={{textDecoration: "none"}} to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <img className={styles.img} src={props.image}  alt='img' />
         <hr />
         <h2 className={styles.description}>{props.species}</h2>
         <h2 className={styles.description}>{props.gender}</h2>
      </div>
   );
}