import React, { useState, useEffect } from 'react';
import styles from '../../src/App.module.css';
import { Link } from 'react-router-dom';
import { deleteFavorite, addToFavorites } from '../redux/actions.js'
import { connect } from 'react-redux';


export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {

      if (isFav === true) {
         setIsFav(false)
         props.deleteFavorite(props.id)
      } else {
         setIsFav(true)
         props.addToFavorites(props)
      };
   };

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.indvCard}>
         {isFav ? (
               <button  onClick={handleFavorite}>❤️</button>
            ) : (
               <button  onClick={handleFavorite}>🤍</button>
            )}
         <button className={styles.button} onClick={props.onClose}>X</button>
         <Link style={{ textDecoration: "none" }} to={`/detail/${props.id}`}>
            <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <img className={styles.img} src={props.image} alt='img' />
         <hr />
         <h2 className={styles.description}>{props.species}</h2>
         <h2 className={styles.description}>{props.gender}</h2>
      </div>
   );
};


export const mapDispatchToProps = (dispatch) => {
   return {
      addToFavorites: (payload) => {
         dispatch(addToFavorites(payload))
      },

      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   };
};

 const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
 };


export default connect(mapStateToProps, mapDispatchToProps)(Card);