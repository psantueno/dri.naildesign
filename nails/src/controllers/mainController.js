const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const productsFilePath = path.join(__dirname, '../database/products.json'); //traigo el json de productos
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lista de productos total

const usersFilePath = path.join(__dirname, '../database/users.json'); //traigo el json de usuarios
let usersJson = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); // lista de usuarios total

//Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada
const categoriasProductos = [];

//se actualiza el array con las categorias de los productos eliminando cualquier duplicado.
productsJson.forEach(product => {

    if (!categoriasProductos.includes(product.categoria)) {
        categoriasProductos.push(product.categoria)
    }
});





const mainController = {

    home: (req, res) => {
        res.render("home", { productsJson, categoriasProductos, userLoggedIn: req.session.userLogin });
    },

    registro: (req, res) => {

        res.render("registro");
    },

    login: (req, res) => {

        res.render("login", { userLoggedIn: req.session.userLogin });
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
                    if (bcrypt.compareSync(req.body.password, usersJson[i].password)) {
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
            delete userToLogin.password;  //proceso de seguridad para proteger el password del user.
            req.session.userLogin = userToLogin;
            // res.render("home", { userLoggedIn: req.session.userLogin, productsJson, categoriasProductos });
            res.redirect("/");
        }
    },

    cart: (req, res) => {
        res.render("carrito", { userLoggedIn: req.session.userLogin });
    }

}

module.exports = mainController;