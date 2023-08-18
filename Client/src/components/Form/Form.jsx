
import React, { useState } from 'react'
import styles from "./Form.module.css"
import Validate from "./Validate"
import img1 from "../assets/logo-rick.jpg"

const Form = (props) => {
 
  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    userName: "",
    password: ""
  })
  
  const handleChange = (event) => {
    const {name,value} = event.target
  
    setUserData({
      ...userData,
      [name]:value
    })
      setErrors(Validate({
      ...userData,
      [name]: value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData)
    
  }
  const handleLogOut = (event) => {
    event.preventDefault()
    props.logOut()
  }
  return (
    <div>
    <form className={styles.container} onSubmit={handleSubmit}>
        <img src={img1} alt='Not Found'/>
        <label htmlFor=''>userName: user123@hotmail.com</label>
        <input type='text' 
        value={userData.userName}
        name='userName' 
        onChange={handleChange}
        className={errors.userName && styles.warning} 
        />
       {errors.userName && <p>{errors.userName}</p>}

        <label htmlFor=''>Password: Hola2023!</label>
        <input type='password' 
        value={userData.password} 
        name='password' 
        onChange={handleChange}
        className={errors.password && styles.warning}
        />
        
        {errors.password ? <p>{errors.password}</p> : null}
        <button type='submit'>Login</button>
        
        </form>
      </div>
  )
}

export default Form