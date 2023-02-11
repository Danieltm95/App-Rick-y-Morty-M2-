import React from 'react';
import styles from '../../src/App.module.css';

export default function Card(props) {
   return (
      <div className={styles.indvCard}>
         <button className={styles.button} onClick={props.onClose}>X</button>
         <h2 className={styles.name}>{props.name}</h2>
         <img className={styles.img} src={props.image}  alt='img' />
         <hr />
         <h2 className={styles.description}>{props.species}</h2>
         <h2 className={styles.description}>{props.gender}</h2>
      </div>
   );
}