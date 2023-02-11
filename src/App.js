import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
//import characters from './data.js'
import background from './assets/backG.jpg'
import styles from './App.module.css'
import { useState } from 'react'




function App () {

  const [characters, setCharacters] = useState([]);
  console.log(characters)

  const onClose = (id) => {

    setCharacters(characters.filter((keys) => keys.id !== id))
  }

  const onSearch = (character) => {
  
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  
  };


  return (
    <div className={styles.App} style={ {backgroundImage: `url(${background})`, padding: '25px'}}>
      
      <div className={styles.navBar}>
        <Nav onSearch={onSearch}/>
      </div>
      <div className={styles.multiCards}>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      
    
    </div>
  )
}

export default App
