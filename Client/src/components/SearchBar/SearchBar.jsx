import styles from "./SearchBar.module.css"
import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      const {value} = event.target;

      setId(value)
   }
   const handleSearch = () => {
      props.onSearch(id)
   }

   return (
      <div className={styles.container}>
      <div className={styles.random}>
      <button  onClick={props.addRandomCharacter}><strong>Personajes Random</strong></button>
      
      </div>
                <input type='text' value={id} onChange={handleChange} placeholder="Id..."/>
      <button onClick={handleSearch}><strong>Agregar</strong></button> 
      <button onClick={props.logOut}>Logout</button>
      </div>
   );
}
