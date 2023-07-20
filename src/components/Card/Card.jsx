import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export default function Card({id,name,species,gender,image, onClose}) {
   return (
      <Link to={`/detail/${id}`}>
         <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={()=>onClose(id)}>X</button>
         </div>

         <div className={styles.imageContainer}>
         <img  src={image} alt="Not Found" />
         </div>

         <h2 className={styles.name}>{name}</h2>
         
         <div className={styles.h22}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>

         </div>

   </Link>
     
      
   );
}
