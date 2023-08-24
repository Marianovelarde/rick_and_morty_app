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
    <NavLinkMe to="/home">
    <button className={`ov-btn-slide-left ${styles.navButton}`}>Home</button>
    </NavLinkMe>
      <NavLinkMe className={`${styles.buttonSlide}`} to="/about">
      <button className={`ov-btn-slide-left ${styles.navButton}`}>About</button>
      </NavLinkMe>
      <NavLinkMe className={`${styles.buttonSlide}`} to="/favorites">
      <button className={`ov-btn-slide-left ${styles.navButton}`}>Favorites</button>
      </NavLinkMe>
    <SearchBar 
    onSearch={props.onSearch}
    logOut={props.logOut}
    addRandomCharacter={addRandomCharacter}/>
    </div>                                                                                                                                      
  )
}

export default Nav