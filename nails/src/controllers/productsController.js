const fs = require("fs");
const path = require("path");

// ************ BASE DATA ************ //
const db = require('../database/models')
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

    store: (req, res) => {
        Products
            .create(
                {
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    imagen: req.file.filename,
                    category_id: req.body.categoria,
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

    updateProduct: (req, res) => {
        if (req.file === undefined) {
            Products
                .update(
                    {
                        nombre: req.body.nombreproducto,
                        descripcion: req.body.descripcionproducto,
                        precio: parseInt(req.body.precioproducto),
                        descuento: parseInt(req.body.descuentoproducto),
                        category_id: req.body.categoriaproducto,
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
                        nombre: req.body.nombreproducto,
                        descripcion: req.body.descripcionproducto,
                        precio: parseInt(req.body.precioproducto),
                        descuento: parseInt(req.body.descuentoproducto),
                        category_id: req.body.categoriaproducto,
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
        .destroy({where: {id: req.params.id}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then( () => {
            return res.redirect('/products')
            })
        .catch(error => res.send(error));
    }
}

module.exports = productsController;