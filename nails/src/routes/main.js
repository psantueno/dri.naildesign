const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")

router.get('/', mainController.home);

router.get('/login', mainController.login);
// Actualizaciòn de las rutas asignadas DA
router.get('/registro', mainController.registro);
// Actualizaciòn de las rutas asignadas DA
router.get('/cart', mainController.cart);

module.exports = router;


