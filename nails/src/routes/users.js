// ************ Librerías Require's ************
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

// validacion de registro de usuario

// const { body } = require("express-validator");
// const regValidation = [
//     body("mail").notEmpty().isEmail().withMessage("Escriba un correo válido").bail(),
//     body("password").notEmpty().withMessage("Escriba su contraseña").bail(),
// 	body("nombre").notEmpty().withMessage("El nombre es requerido").bail()        
// ]
// requerir middleware de validacion registro
const regValidation= require("../middlewares/validacionRegistro")

// ************ Controllers Require ************
const usersController = require("../controllers/usersController");

// ************ Configuración Multer ************
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

// /*** LISTA DE USUARIO ***/ 
//---router.get('/', usersController.listProducts);

// /*** DETALLE DE USUARIO ***/ 
//---router.get('/detailProduct/:id', usersController.detailProduct);

// /*** CREATE ONE USUARIO ***/ 
//-- upload.single("imagenusuario"), NO REQUIERE ESTA RUTA POR GET, ESTO SE HACE DESDE EL /REGISTRO QUE ESTA EN MAIN router.get('/addUser', usersController.addNewUser);
router.get('/registro', usersController.registro);///,regValidation
router.post('/registro',upload.single("imagenusuario"),regValidation,  usersController.store);


// /*** EDITAR USUARIO ***/ 
//---router.get('/editProduct/:id', usersController.editProduct);
// --- router.put('/editProduct/:id', upload.single("imagenproducto"), usersController.updateProduct);

// /*** ELIMINAR USUARIO ***/ 
//--- router.delete('/:id', usersController.destroy);


module.exports = router;

