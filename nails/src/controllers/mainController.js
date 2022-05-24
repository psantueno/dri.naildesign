const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const productsFilePath = path.join(__dirname, '../database/products.json');
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lista de productos total

//Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada
const categoriasProductos= [];

//se actualiza el array con las categorias de los productos eliminando cualquier duplicado.
productsJson.forEach(product=>{

    if (!categoriasProductos.includes(product.categoria)){
        categoriasProductos.push(product.categoria)
    }
});





const mainController = {
    
    home: (req, res) => {
        //console.log(categoriasProductos)
        //console.log(productsJson)


            res.render("home", {productsJson, categoriasProductos});

    },

    registro: (req, res) => {
        
        res.render("registro");
    },
    
    login: (req, res) => {
        
        res.render("login");
    },

    processLogin: (req, res) => {
        const { errors } = validationResult(req);
        if(errors.length > 0) {
            return res.render("login", {errors});
        } else {
            //Acá va la lógica para traer a todos los usuarios//
            let users = [];  //se lo deja vacío para comprobar funcionamiento del código.
            let userToLogin = undefined;
            for(let i=0; i < users.length; i++) {
                if(users[i].email === req.body.email) {
                    if(bcrypt.compareSync(req.body.password, users[i].password)) {
                        userToLogin = users[i];
                        break;
                    }
                }
            }

            if(userToLogin === undefined) {
                return res.render("login", {errors: [
                    {
                        param: "credentialsInvalid",
                        msg: "Ha ingresado un email o contraseña incorrecta"
                    }
                ]});
            }

            req.session.userLogin = userToLogin;
            res.render("home", {userLoggedIn: req.session.userLogin});
        }
    },

    cart: (req, res) => {
        res.render("carrito");
    }

}

module.exports = mainController;