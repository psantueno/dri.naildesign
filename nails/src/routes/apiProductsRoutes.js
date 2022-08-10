// ************ Libraries Require's ************ //
const express = require("express");
const router = express.Router();

// ************ Controllers Require's  ************ //
const apiProducts = require("../controllers/api/apiProducts");

// ************ API USERS ROUTES ************ //

router.get('/', apiProducts.listProducts);

router.get('/:id', apiProducts.detailProduct);

module.exports = router;
