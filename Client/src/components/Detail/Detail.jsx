import React from 'react'
import {useState} from "react"
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./Detail.module.css"
import { Link } from 'react-router-dom'

const Detail = (props) => {

  const {detailId} = useParams()
  const [character, setCharacter] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => { 
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("Ups! Se ha producido un error.");
      });
    
  }, []);

  return (
    <div className={styles.container}>
    <div className={styles.description}>
    
    <button className={styles.butt} onClick={() => navigate("/home")}>Regresar</button>
    
    <h1>Name: {character.name}</h1>
    <h1>Status: {character.status}</h1>
    <h1>Gender: {character.gender}</h1>
    <h1>Species: {character.species}</h1>
    <h1>Origin: {character.origin?.name}</h1>
    <h1>Location: {character.location?.name}</h1>
    
    </div>
    <img className={styles.image} src={character.image} alt="Imagen"/>
    </div>
  )
}

export default Detail