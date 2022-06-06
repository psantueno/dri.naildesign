// ************ Librerías Require's ************ //
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

// ************ Controllers Require's  ************ //
const usersController = require("../controllers/usersController");

// ************ Middlewares Require's  ************ //
const regValidation= require("../middlewares/validacionRegistro");
const usersValidation = require("../middlewares/validacionLogin");
const guestRoutes = require("../middlewares/guestRoutes");
const notLogged = require("../middlewares/notLogged");

// ************ Configuración Multer ************ //
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		let folder = path.join(__dirname, "../../public/image/users");
		callback(null, folder);
	},

	filename: (req, file, callback) => {
		const imageName = "users-" + Date.now() + path.extname(file.originalname);
		callback(null, imageName);
	}
});

const upload = multer({storage: storage});


// ************ USERS ROUTES ************ //

// LOGIN //
router.get('/login', guestRoutes, usersController.login);
// PROCESS LOGIN //
router.post('/login', usersValidation, usersController.processLogin);
// REGISTER //
router.get('/registro', guestRoutes, usersController.registro);
// PROCESS REGISTER //
router.post('/registro',upload.single("imagenusuario"),regValidation,  usersController.store);

// /*** LISTA DE USUARIOS ***/ 
// router.get('/', usersController.listUsers);

// /*** DETALLE DE USUARIOS ***/ 
//---router.get('/detailProduct/:id', usersController.detailUsers);

// /*** CREATE USER ***/ 
//-- upload.single("imagenusuario"), NO REQUIERE ESTA RUTA POR GET, ESTO SE HACE DESDE EL /REGISTRO QUE ESTA EN MAIN router.get('/addUser', usersController.addNewUser);

// /*** EDITAR USUARIO ***/ 
//---router.get('/editProduct/:id', usersController.editProduct);
// --- router.put('/editProduct/:id', upload.single("imagenproducto"), usersController.updateProduct);

// /*** ELIMINAR USUARIO ***/ 
//--- router.delete('/:id', usersController.destroy);

module.exports = router;

