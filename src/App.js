import './App.css'
import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form'



function App () {
  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const userName =   "marianov1@hotmail.com"
  const password = "Hola2023!"

  

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            const exists = characters.some((character) => character.id === data.id);
        if (!exists) {
          setCharacters((oldChars) => [...oldChars, data]);  
        }
        else {
          window.alert('ERROR: El personaje ya existe en la lista');
        }
          }
          else {
             window.alert('ERROR: No hay personajes con ese ID');
          }
       })
      }
      const onClose = (id) => {
       
        const filtered = characters.filter((char) => char.id !== parseInt(id));
      
      setCharacters(filtered)
    }

    const login = (userData) => {
    if(userData.userName === userName &&
     userData.password === password) {
      setAccess(true)
      navigate("/home") 
     }
    }
    const logOut = () => {
      access && setAccess(false)
      navigate("/")
    }

  useEffect(()=> {
    !access && navigate("/")
  },[access])

  return (
    <div className='App' style={{ padding: '25px'}}>
    
    {location.pathname !== "/" && 
    <Nav 
     onSearch={onSearch}
     characters={characters}
     logOut={logOut}
    />
  }
    <Routes>
    <Route path='/' element={<Form 
      login={login}
      
      />}
      />
    <Route path='/home' 
      element={<Cards
      characters={characters} 
      onClose={onClose}
      />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      
     
        </Routes>
    </div>
  )
}

export default App
