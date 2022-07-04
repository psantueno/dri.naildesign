const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");


// ************ BASE DATA PRODUCTS ************ //
const db = require('../database/models');
const { Products } = db;
const { Categories } = db;


// ************ START CONTROLLER ************ //
const mainController = {

    home: (req, res) => {
        const allProducts = Products.findAll({ include: 'category', raw: true, nest: true });
        const allCategories = Categories.findAll({ raw: true, nest: true })

        Promise
        .all([allProducts, allCategories])
        .then(([products, categories]) => {
            return res.render('home', {products, categories });
        })
        .catch(error => res.send(error));
    },

    registro: (req, res) => {
        res.render("registro");
    },

    cart: (req, res) => {
        res.render("carrito");
    }
}

module.exports = mainController;