// validacion de creación y edición de productos
const { body } = require("express-validator");

const validAddEditProd = [
    body("nombre").notEmpty().withMessage("Debe ingresar el nombre del producto").bail()
         .isLength({min:4}).withMessage("El nombre debe tener al menos 4 caracteres").bail(),
    body("descripcion").notEmpty().withMessage("Debe ingresar una descripción").bail()
        .isLength({min:70}).withMessage("Detalle más información del producto").bail()
        .isLength({max:432}).withMessage("Máximo de caracteres permitidos: 432").bail(),
	body("category_id").notEmpty().withMessage("Seleccione una categoría").bail(),        
    body("cantidad").notEmpty().withMessage("Indique el stock del producto").bail()
                    .isNumeric().withMessage("Debe ingresar un número entero").bail(),
    body("precio").notEmpty().withMessage("Debe asignar el precio del producto").bail()
         .isNumeric().withMessage("Debe ingresar un número entero").bail(),
    body("descuento").isNumeric().withMessage("Debe ingresar un número entero").bail(),    
];

module.exports = validAddEditProd;