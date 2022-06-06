// ************ Librerías Require's ************ //
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// ************ Controllers Require's  ************ //
const mainController = require("../controllers/mainController");

// ************ Middlewares Require's  ************


// ************ MAIN ROUTES ************ //

// HOME //
router.get('/', mainController.home);
// CARRITO //
router.get('/cart', mainController.cart);

module.exports = router;


