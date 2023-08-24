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
            <button onClick={props.addRandomCharacter}><strong>Personajes Random</strong></button>
         </div>
         
                <input type='text' value={id} onChange={handleChange} placeholder="Id..."/>
         
         <div className={styles.addButton}>
                <button onClick={handleSearch}><strong>Agregar</strong></button> 
         </div>
         
         <div className={styles.logout}>
            <button onClick={props.logOut}>Logout</button>
         </div>      
      
         </div>
   );
}
