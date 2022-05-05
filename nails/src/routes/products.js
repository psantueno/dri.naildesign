const express = require("express")
const router = express.Router()
const productsController = require("../controllers/productsController")

router.get('/', productsController.listProducts);

router.get('/detailProduct/:id', productsController.detailProduct);

router.get('/addProduct', productsController.addNewProduct);

router.get('/editProduct/:id', productsController.editProduct);

router.put('/editProduct/:id', productsController.updateProduct);

module.exports = router;