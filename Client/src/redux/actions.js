import axios from "axios"


export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES"


export const addToFavorites = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_TO_FAVORITES,
             payload: data,
            });
         });
      };
   };
   
   export const deleteFromFavorites = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FROM_FAVORITES,
             payload: data,
       });
       });
    };
 };
   // export const addToFavorites = (character) => {
   //     return {
   //         type: ADD_TO_FAVORITES,
   //         payload: character
   //     }
   // }

   // export const deleteFromFavorites = (id) => {
//     return {
//         type: DELETE_FROM_FAVORITES,
//         payload: id
//     }
// }