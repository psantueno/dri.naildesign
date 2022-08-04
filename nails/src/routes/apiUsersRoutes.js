// ************ Libraries Require's ************ //
const express = require("express");
const router = express.Router();

// ************ Controllers Require's  ************ //
const apiUsersController = require("../controllers/api/apiUsersController");

// ************ API USERS ROUTES ************ //

router.get('/', apiUsersController.listUsers);
router.get('/logueado', apiUsersController.detailLogeado);
router.get('/:id', apiUsersController.detail);


module.exports = router;


