// validación de Login
const { body } = require("express-validator");

const usersValidation = [
    body("email").notEmpty().withMessage("El correo es requerido").bail()
        .isEmail().withMessage("Escriba un correo válido").bail(),
    body("password").notEmpty().withMessage("Debe ingresar su contraseña").bail()
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
];

module.exports = usersValidation;

