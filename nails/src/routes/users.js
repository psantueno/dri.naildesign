// ************ Libraries Require's ************ //
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

// ************ Controllers Require's  ************ //
const usersController = require("../controllers/usersController");

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

// LOGIN //
router.get('/login', guestRoutes, usersController.login);
// PROCESS LOGIN //
router.post('/login', usersValidation, usersController.processLogin);

// LOGOUT //
router.get('/logout', usersController.logout);

// REGISTER //
router.get('/registro', guestRoutes, usersController.registro);
// PROCESS REGISTER //
router.post('/registro',upload.single("imagenusuario"), regValidation, usersController.store);

// LISTA DE USERS //
router.get('/', notLogged, adminAuth, usersController.listUsers);

// CREAR USUARIO //
router.get('/addUser', notLogged, adminAuth, usersController.add);
// PROCESS CREATE USER //
router.post('/', upload.single("imagenuser"), regValidation, usersController.create);

// PERFIL USER //
router.get('/detailUser/:id', usersController.detail);

// EDITAR USER //
router.get('/editUser/:id', usersController.edit);
// PROCESS EDIT USER //
router.put('/editUser/:id', notLogged, upload.single("imagenuser"), regValidation, usersController.update);

// ELIMINAR USUARIO //
router.delete('/:id', usersController.destroy);


module.exports = router;


