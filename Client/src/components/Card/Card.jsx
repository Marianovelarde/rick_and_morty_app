import styles from "./Card.module.css"
import {Link} from "react-router-dom"
import { addToFavorites,deleteFromFavorites } from "../../redux/actions"; 
import { connect } from "react-redux";
import { useState, useEffect } from "react";

 function Card({id,name,species,gender,image, onClose,addToFavorites,deleteFromFavorites, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      if (myFavorites && myFavorites.length > 0) {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites, id]);

   const handleFavorite = () => { 
   if(isFav) {
      setIsFav(false)
      deleteFromFavorites(id)
   } else {
      setIsFav(true);
      addToFavorites({
         id,
        name,
        species,
        gender,
        image,
        onClose
      })
      
   }
}

   return (
      
         <div className={styles.container}>
         <div className={styles.buttonContainer}>
               {isFav ? (
               <button className={styles.favoriteButton} onClick={handleFavorite}>
                 ❤️</button>
             ) : (
               <button className={styles.favoriteButton} onClick={handleFavorite}>
                 🤍</button>
                 )}
                 {isFav ? null: ( <button className={styles.button} onClick={()=>onClose(id)}>X</button>)}
                
            </div>
      <Link to={`/detail/${id}`}>
         <div className={styles.imageContainer}>
         <img  src={image} alt="Not Found" />
         </div>
      </Link>

         <h2 className={styles.name}>{name}</h2>
         
         <div className={styles.h22}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
         
         </div>


     
      
   );
}

export const mapDispatchToProps = (dispatch) => {
   return { 
addToFavorites: (character) => {
   dispatch(addToFavorites(character))
},

deleteFromFavorites: (id) => {
   dispatch(deleteFromFavorites(id))
}
}
}
export const mapStateToProps = (state) => {
   return { 
   myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)