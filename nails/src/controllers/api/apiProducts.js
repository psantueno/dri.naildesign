// ************ BASE DATA ************ //
const db = require('../../database/models');
const { Products } = db;
const { Categories } = db;


// ************ START CONTROLLER ************ //
const apiProducts = {

    listProducts: (req, res) => {
        const allProducts = Products.findAll({ include: 'category', raw: true, nest: true });
        const allCategories = Categories.findAll({ raw: true, nest: true });

        Promise
            .all([allProducts, allCategories])
            .then(([products, categories]) => {
                return res.json({ products, categories });
            })
            .catch(error => res.send(error));
    },

    detailProduct: (req, res) => {
        Products.findByPk(req.params.id,
            {
                include: ['category']
            })
            .then(product => {
                return res.json({ product });
            })
            .catch(error => res.send(error));
    },
}

module.exports = apiProducts;