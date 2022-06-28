const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require('../database/models/index')

// ************ BASE DATA USERS ************ //
//NODE//
const usersFilePath = path.join(__dirname, '../database-vieja/users.json');
let usersJson = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); // lista de usuarios total
 
//MYSQL//
const { Users } = db;

// Array para almacenar los rols de los usuarios //
const rolUsuers = [];

// Se actualiza el array con los roles de los users eliminando cualquier duplicado //
usersJson.forEach(users => {
    if (!rolUsuers.includes(users.rol)) {
        rolUsuers.push(users.rol)
    }
});

// ************ START CONTROLLER ************ //
const usersController = {

    login: (req, res) => {
        res.render("login");
    },

    processLogin: (req, res) => {
    
        const { errors } = validationResult(req);
        if (errors.length > 0) {
            return res.render("login", { errors, old: req.body });
        }
        else {
            let userToLogin = undefined;
            for (let i = 0; i < usersJson.length; i++) {
                if (usersJson[i].email === req.body.email) {
                    if (bcryptjs.compareSync(req.body.password, usersJson[i].password)) {
                        userToLogin = usersJson[i];
                        break;
                    }
                }
            }
            if (userToLogin === undefined) {
                return res.render("login", {
                    errors: [
                        {
                            param: "credentialsInvalid",
                            msg: "Ha ingresado un email o contraseña incorrecta"
                        }
                    ]
                });
            }
            req.session.userLogin = {
                email: userToLogin.email, 
                nombre: userToLogin.nombre,
                rol: userToLogin.rol                 //proceso de seguridad para proteger el password, solo asigno las propiedades necesarias.
            }  
            console.log(req.session.userLogin)

            if (req.body.rememberMe) {
                res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2 }); //1° param: name cookie, 2°param: valor cookie y 3°param: duración.
            }

            res.redirect("/");
        }
    },

    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    },

    listUsers: (req, res) => {
        res.render("listUsers", { usersJson, usersUsers });
    },

    detailUsers: (req, res) => {
    
        const id = parseInt(req.params.id);
        const usersDeUrl = usersJson.find(users => users.id === id);
        res.render("detailUsers", { usersDeUrl });
    },

    editUsers: (req, res) => {
        const id = parseInt(req.params.id);
        const usersEdited = usersJson.find(users => users.id === id);
        res.render("editUsers", { usersEdited, rolUsers });

    },

    updateUsers: (req, res) => {
        let id = parseInt(req.params.id);

        usersJson.forEach(users => {
            if (users.id === id) {

                if (req.file === undefined) {

                    users.nombre = req.body.nombreusers;
                    users.mail = req.body.mailusers;
                    users.telefono = req.body.telefonousers;
                    users.password = req.body.passwordusers;
                    users.rol = req.body.rolUsers;
                }
                else {
                    users.nombre = req.body.nombreusers;
                    users.mail = req.body.mailusers;
                    users.telefono = req.body.telefonousers;
                    users.password = req.body.passwordusers;
                    users.rol = req.body.rolusers;
                    users.imagen = req.file.filename;
                }
            }
        })
        let usersUpdatedDB = JSON.stringify(usersJson)
        fs.writeFileSync(usersFilePath, usersUpdatedDB)
        res.redirect('/users')
    },

    store: (req, res) => {

        const { errors } = validationResult(req);

        if (req.body.terminos != undefined) {
            if (errors.length > 0) {
                return res.render("registro", { errors, old: req.body });
            }

            else if (usersJson.find(element => element.email === req.body.email) === undefined) {
                
                const newusers = req.body;                                      // Trae los datos del form create.
                newusers.id = usersJson.length + 1;                            // asigno un ID.
                newusers.rol = "Cliente";
                newusers.password = bcryptjs.hashSync(req.body.password, 10);

                if (req.imagenusuario != undefined) {                           // tambien se podrìa validar como req.file != undefined 
                    newusers.imagen = req.file.filename;                       // asocio la imagen del cliente (si hay).
                }

                else {
                    newusers.imagen = "usuario-generico.png";
                }
                usersJson.push(newusers);                            // agrego el usuario creado al array de objetos de nuestra base de datos.
                let newUsersReady = JSON.stringify(usersJson);      // convierto a JSON para poder almacenarlo en dataBase.
                fs.writeFileSync(usersFilePath, newUsersReady);    // escribo en el archivo users.json (database).
                res.redirect("/users/login");
            }

            else {
                
                res.render("registro", { emailexiste: "El email ya se encuentra registrado", old: req.body })
            }
        }
        
        else {
            res.render("registro", { terminos: "Debes aceptar los terminos y condiciones", old: req.body })
        }
    },

    registro: (req, res) => {
        res.render("registro");
    },

    destroy: (req, res) => {
        let id = parseInt(req.params.id);
        let usersUpdate = usersJson.filter(element => element.id !== id);
        usersToDb = JSON.stringify(usersUpdate);
        fs.writeFileSync(usersFilePath, usersToDb);
        res.redirect("/users");
    }
}

module.exports = usersController;