import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../redux/reducer"
import { compose } from "redux";

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)), 
  
  );
  

export default store