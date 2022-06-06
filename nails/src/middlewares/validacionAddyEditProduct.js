// validacion de form add y edit product
const { body } = require("express-validator");

const addEditProductValidation = [
    body("nombre").notEmpty().withMessage("Debe agregar un título para el producto").bail()
        .isString().withMessage("El título debe contener letras").bail(),
    body("descripcion").notEmpty().withMessage("Debe agregar una descripción del producto").bail()
        .isString().withMessage("La descripción debe ser un texto").bail()
        .isLength({min:50}).withMessage("La descripción debe contar al menos con 50 caracteres").bail(),
	body("categoria").notEmpty().withMessage("Debe seleccionar una categoría").bail(),        
    body("stock").notEmpty().withMessage("Debe ingresar el stock").bail()
        .isInt().withMessage("El stock debe ser un número entero").bail(), 
    body("precio").notEmpty().withMessage("Debe ingresar el precio").bail()
        .isNumeric().withMessage("El precio debe ser un número sin el signo $")  
]
module.exports = addEditProductValidation;