// ************ Libraries Require's ************ //
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

// ************ Controllers Require's  ************ //
const apiUsersController = require("../controllers/api/apiUsersController");

// ************ Middlewares Require's  ************ //
const regValidation = require("../middlewares/validacionRegistro");
const usersValidation = require("../middlewares/validacionLogin");
const guestRoutes = require("../middlewares/guestRoutes");
const notLogged = require("../middlewares/notLogged");
const adminAuth = require("../middlewares/adminAuth");

// ************ Configuración Multer ************ //
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		let folder = path.join(__dirname, "../../public/image/users");
		callback(null, folder);
	},

	filename: (req, file, callback) => {
		const imageName = "users-" + Date.now() + path.extname(file.originalname);
		req.imagenusuario=imageName;
		callback(null, imageName);
	}
});

const upload = multer({storage: storage});


// ************ USERS ROUTES ************ //

// LISTA DE USERS //
//router.get('/users', notLogged, adminAuth, apiUsersController.listUsers);
router.get('/users', apiUsersController.listUsers);
//router.get('/users/logueado', notLogged, adminAuth, apiUsersController.detailLogeado);
router.get('/users/logueado', apiUsersController.detailLogeado);
router.get('/users/:id', apiUsersController.detail);


module.exports = router;


