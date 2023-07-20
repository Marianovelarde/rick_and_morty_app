



const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");



const Validate = (userData) =>{
  const errors = {}
  if(!regexEmail.test(userData.userName)){
    errors.userName = "Debe ser un Email"
  }
  if(!userData.userName) {
    errors.userName = "No puede ser vacío"
  }
  if(userData.userName.length > 35) {
    errors.userName = "No puede superar los 35 caracteres"
  }

  if(!regexPassword.test(userData.password)) {
    errors.password= "Debe contener mayuscula,minusculas, num y simbolos"
  }
  if(userData.password.length < 6 || userData.password > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
}
  return errors 
} 

export default Validate