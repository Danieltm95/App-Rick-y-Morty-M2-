
//     const regexEmail = /\S+@\S+\.\S+/
//     const checkPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
// export default function validate(inputs) {
//     console.log(inputs['password'])
//     let errors = {};
 
    
//     if(!inputs.username){
//       errors["username"] = "Se requiere un nombre de usario";   
//     };
    
//     if(!regexEmail.test(inputs.username)){
//       errors.username = "Debe ser un correo electrónico";
//     };
    
//     if(inputs.username.length > 35){
//       errors["phone"] = "Contrasena menores a 35 caracteres";
//     };
    
//     if(!checkPass.test(inputs.password) ){
//       errors["subject"] = "Se requiere por lo menos un numero y maximo entre 6 y 10 caracteres+";
      
//     };
    
//     return errors;
//     };

export default function validateInputs({username, password}){
  let errors = {}
  if(!username || !/\S+@\S+\.\S+/.test(username) || username.length >= 35) errors.username = 'Campo obligatorio a rellenar con un email de menos de 35 caracteres';
  if(!password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres, y al menos un número';
  return errors;
}