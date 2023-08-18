import {
    ADD_TO_FAVORITES,
    DELETE_FROM_FAVORITES
} from "./actions"

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: []

}
const rootReducer = (state= initialState, action) => {
    switch(action.type) {
     case ADD_TO_FAVORITES: return {
         ...state, myFavorites: action.payload, 
                 allCharacter: action.payload  };
     case DELETE_FROM_FAVORITES:
        return { ...state, myFavorites: action.payload };
        
     default: return {...state};
    }
}
export default rootReducer