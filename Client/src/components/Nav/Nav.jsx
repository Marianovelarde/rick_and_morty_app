import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from "./Nav.module.css"
import {NavLink, Link} from "react-router-dom"

const NavLinkMe = ({to, children, ...props}) => {
  return (
    <NavLink
    {...props}
    to={to}
    className={({isActive}) =>
      isActive ? styles.active :
      styles.disable
    }
    >{children}
    
    </NavLink>
  )
}

const Nav = (props) => {

  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1; // Generar ID aleatorio entre 1 y 826

    const exists = props.characters.some((character) => character.id === randomId);
    if (!exists) {
      props.onSearch(randomId.toString());
    } else {
      window.alert('ERROR: El personaje ya existe en la lista');
    }
  };
  return (

    <div className={styles.contPrincipal}>
    <NavLinkMe className={styles.nave} to="/home">Home</NavLinkMe>
    <NavLinkMe to="/about">About</NavLinkMe>
    <NavLinkMe to="/favorites">Favorites</NavLinkMe>
    <SearchBar 
    onSearch={props.onSearch}
    logOut={props.logOut}
    addRandomCharacter={addRandomCharacter}/>
    </div>                                                                                                                                      
  )
}

export default Nav