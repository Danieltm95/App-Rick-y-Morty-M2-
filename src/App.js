import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import background from './assets/backG.jpg'
import styles from './App.module.css'


function App () {
  return (
    <div className={styles.App} style={ {backgroundImage: `url(${background})`, padding: '25px'}}>
      <div className={styles.multiCards}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div className={styles.multiCards}>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
