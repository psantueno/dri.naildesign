const express = require("express")
const router = express.Router()
const productsController = require("../controllers/productsController")

router.get('/', productsController.listProducts);

router.get('/detailProduct', productsController.detailProduct);

router.get('/addProduct', productsController.addNewProduct);

router.get('/editProduct', productsController.editProduct);
router.get('/prueba1', productsController.prueba);

module.exports = router;