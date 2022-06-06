const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const mainController = require("../controllers/mainController");

const usersValidation = [
    body("email").notEmpty().withMessage("El correo es requerido").bail()
        .isEmail().withMessage("Escriba un correo válido"),
    body("password").notEmpty().withMessage("Debe ingresar su contraseña").bail()
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
]

router.get('/', mainController.home);

router.get('/login', mainController.login);
router.post('/login', usersValidation, mainController.processLogin);

//router.get('/registro', mainController.registro);

router.get('/cart', mainController.cart);

module.exports = router;


