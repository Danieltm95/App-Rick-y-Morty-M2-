import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
//import characters from './data.js'
import background from './assets/backG.jpg'
import styles from './App.module.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"





function App() {

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
    <div className={styles.App} style={{ backgroundImage: `url(${background})`, padding: '25px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'100%' }}>

      <div >
        <Nav 
        onSearch={onSearch}
         />
      </div>
      <Routes>
       

        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />

      </Routes>


    </div>
  )
}

export default App
