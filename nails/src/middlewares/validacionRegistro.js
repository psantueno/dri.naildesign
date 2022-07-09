// validacion de registro de usuario
const { body } = require("express-validator");

const regValidation = [
    body("email").notEmpty().withMessage("Debe ingresar un email").bail()
        .isEmail().withMessage("Escriba un correo válido").bail(),
    body("password").notEmpty().withMessage("Debe ingresar una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres").bail(),
	body("nombre").notEmpty().withMessage("El nombre es requerido").bail(),        
    body("apellido").notEmpty().withMessage("El apellido es requerido").bail(),
    body("rol").notEmpty().withMessage("Debe asignar uno de los siguientes roles: 'Administrador' o 'Cliente'").bail()    
];

module.exports = regValidation;


