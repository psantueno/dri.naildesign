const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")


// Actualizaciòn de las rutas asignadas DA
/*
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/users/login.html'));
})
*/
router.get('/login', usersController.irALogin)
// Actualizaciòn de las rutas asignadas DA
router.get('/registro', usersController.irARegistro)
// Actualizaciòn de las rutas asignadas DA

/*
router.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/products/carrito.html'));
})

*/
module.exports = router


