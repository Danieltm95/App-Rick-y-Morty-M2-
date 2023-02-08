import styles from '../../src/App.module.css';

export default function SearchBar(props) {
   return (
     <div>
      <input className={styles.searchBar} type='search' />
      <button className={styles.searchBtn} onClick={props.onSearch}>Add</button> 
      </div>
   );
}
