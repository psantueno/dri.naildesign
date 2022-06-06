const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

// ************ BASE DATA PRODUCTS ************ //
const productsFilePath = path.join(__dirname, '../database/products.json'); //traigo el json de productos
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lista de productos total

// Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada //
const categoriasProductos = [];

// Se actualiza el array con las categorias de los productos eliminando cualquier duplicado //
productsJson.forEach(product => {

    if (!categoriasProductos.includes(product.categoria)) {
        categoriasProductos.push(product.categoria)
    }
});


// ************ START CONTROLLER ************ //
const mainController = {

    home: (req, res) => {
        res.render("home", { productsJson, categoriasProductos, userLoggedIn: req.session.userLogin });
    },

    registro: (req, res) => {
        res.render("registro");
    },

    cart: (req, res) => {
        res.render("carrito", { userLoggedIn: req.session.userLogin });
    }
}

module.exports = mainController;