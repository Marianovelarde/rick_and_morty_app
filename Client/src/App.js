import './App.css'
import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form'
import Favorites from "../src/components/Favorites/Favorites"
import axios from "axios"



function App () {
  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(true)

  

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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

    // const login = (userData) => {
    // if(userData.userName === userName &&
    //  userData.password === password) {
    //   setAccess(true)
    //   navigate("/home") 
    //  }
    // }
    function login(userData) {
      const { userName, password } = userData;
      console.log(userData);
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?userName=${userName}&password=${password}`).then(({ data }) => {
         const { access } = data;
         console.log(data)
         setAccess(data);
         access && navigate('/home');
      });
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
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      
     
        </Routes>
    </div>
  )
}

export default App
