import { useState } from 'react';
import styles from '../../src/App.module.css';

export default function SearchBar(props) {

   const {onSearch} = props;
   const [character, setCharacter] = useState('');



   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   };

   return (
     <div className={styles.navSearchBar}>
      <input className={styles.searchBar} type='search' value={character} onChange={handleChange}/>
      <button className={styles.searchBtn} onClick={() => onSearch(character)}  >Add</button> 
      </div>
   );
}
