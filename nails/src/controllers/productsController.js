const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch');
const { validationResult } = require("express-validator");

// ************ BASE DATA ************ //
const db = require('../database/models');
const { log } = require("console");
const { Products } = db;
const { Categories } = db;


// ************ START CONTROLLER ************ //
const productsController = {

    listProducts: (req, res) => {
        const allProducts = Products.findAll({ include: 'category', raw: true, nest: true });
        const allCategories = Categories.findAll({ raw: true, nest: true });

        Promise
            .all([allProducts, allCategories])
            .then(([products, categories]) => {
                return res.render('listProducts', { products, categories });
            })
            .catch(error => res.send(error));
    },

    detailProduct: (req, res) => {
        Products.findByPk(req.params.id,
            {
                include: ['category']
            })
            .then(product => {
                return res.render('detailProduct', { product });
            })
            .catch(error => res.send(error));
    },

    addNewProduct: (req, res) => {
        Categories.findAll({ raw: true, nest: true })
            .then(categories => {
                return res.render('addProduct', { categories });
            })
            .catch(error => res.send(error));
    },

    store: async (req, res) => {

        const { errors } = validationResult(req);

        if (errors.length > 0) {
            try {
                const categories = await Categories.findAll({ raw: true, nest: true });
                return res.render('addProduct', { errors, old: req.body, categories });

            } catch (error) {
                res.send(error);
            }
        }

        Products
            .create(
                {
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    imagen: req.file.filename,
                    category_id: req.body.category_id,
                    descuento: req.body.descuento,
                    descripcion: req.body.descripcion,
                    cantidad: req.body.cantidad
                }
            )
            .then(() => {
                return res.redirect("/products");
            })
            .catch(error => res.send(error))
    },

    editProduct: (req, res) => {
        const productToEdit = Products.findByPk(req.params.id, { include: ['category'] });
        const allCategories = Categories.findAll({ raw: true, nest: true });

        Promise
            .all([productToEdit, allCategories])
            .then(([productEdited, categories]) => {
                return res.render('editProduct', { productEdited, categories });
            })
            .catch(error => res.send(error));
    },

    update: async (req, res) => {

        const { errors } = validationResult(req);

        if (errors.length > 0) {

            try {
                const productEdited = await Products.findByPk(req.params.id, { include: ['category'] });
                const categories = await Categories.findAll({ raw: true, nest: true });
                return res.render('editProduct', { productEdited, categories, errors, old: req.body });
            } catch (error) {
                res.send(error);
            }  
        }

        if (req.file === undefined) {

            Products.update(
                {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: parseInt(req.body.precio),
                    descuento: parseInt(req.body.descuento),
                    category_id: req.body.category_id,
                    cantidad: req.body.cantidad
                },
                {
                    where: { id: req.params.id }
                })
                .then(() => {
                    return res.redirect('/products')
                })
                .catch(error => res.send(error));
        }
        else {
            Products
                .update(
                    {
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion,
                        precio: parseInt(req.body.precio),
                        descuento: parseInt(req.body.descuento),
                        category_id: req.body.category_id,
                        cantidad: req.body.cantidad,
                        imagen: req.file.filename
                    },
                    {
                        where: { id: req.params.id }
                    })
                .then(() => {
                    return res.redirect('/products')
                })
                .catch(error => res.send(error));
        }
    },

    destroy: (req, res) => {
        Products
            .destroy({ where: { id: req.params.id }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/products')
            })
            .catch(error => res.send(error));
    }
}

module.exports = productsController;