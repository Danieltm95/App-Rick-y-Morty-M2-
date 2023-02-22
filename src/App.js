import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
//import characters from './data.js'
import background from './assets/backG.jpg'
import styles from './App.module.css'
import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Form from "./components/Form.jsx"
import Favorites from './components/Favorites.jsx'






function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  console.log(characters)

  const onClose = (id) => {

    setCharacters(characters.filter((keys) => keys.id !== id))
  }


  const [access, setAccess] = useState(false)


  const username = "docampoc95@gmail.com"
  const password = "danieltm95"

  const login = (userData) => {
    console.log("usar log in")
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
      console.log(userData);
    }



  };

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

  function logout() {
    setAccess(false);
    navigate('/');
  };
  return (
    <div className={styles.App} style={{ backgroundImage: `url(${background})`, padding: '25px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%' }}>


      <Routes>
        
      </Routes>

      <div >
        
        {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
    
      </div>
      <Routes>

        <Route exact path='/favorites' element={<Favorites />} />
        <Route exact path='/' element={<Form login={login}/>} />
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />

      </Routes>


    </div>
  )
}

export default App
