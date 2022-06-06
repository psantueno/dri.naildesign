// validacion de registro de usuario
const { body } = require("express-validator");

const regValidation = [
    body("email").notEmpty().isEmail().withMessage("Escriba un correo válido").bail(),
    body("password").notEmpty().isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres").bail(),
	body("nombre").notEmpty().withMessage("El nombre es requerido").bail(),        
    body("apellido").notEmpty().withMessage("El apellido es requerido").bail()    
]
module.exports = regValidation;