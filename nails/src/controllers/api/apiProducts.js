// ************ BASE DATA ************ //
const db = require('../../database/models');
const { Products } = db;
const { Categories } = db;


// ************ START CONTROLLER ************ //
const apiProducts = {

    listProducts: async (req, res) => {

        try {
            const allProducts = await Products.findAll({include: "category", nest: true});
            const allCategories = await Categories.findAll({ include: "products", nest: true });
           
            const countByCategory = allCategories.reduce( (prev, {nombre, products}) => {
                return {
                    ...prev,
                    [nombre]: products.length
                }
            }, {});

            let detailProduct = allProducts.map( product => {
                            let detail = {};
                            detail.link = `http://localhost:3001/api/products/${product.id}`;
                            return detail;
            });

            res.json({allProducts, allCategories, count: allProducts.length, countByCategory, detailProduct})

        } catch (error) {
            res.send(error)
        }

        // const allProducts = Products.findAll({ include: 'category', raw: true, nest: true });
        // const allCategories = Categories.findAll({ raw: true, nest: true });

        // Promise
        //     .all([allProducts, allCategories])
        //     .then(([products, categories]) => {
        //         let detailProduct = products.map( product => {
        //             let detail = {};
        //             detail.link = `http://localhost:3001/api/products/${product.id}`;
        //             return detail;
        //         });
        //         return res.json({ products, categories, count: products.length, detailProduct });
        //     })
        //     .catch(error => res.send(error));
    },

    detailProduct: (req, res) => {
        Products.findByPk(req.params.id,
            {
                include: ['category']
            })
            .then(product => {
                if (product === null) {
                    return res.send("El producto al que intenta acceder no existe.");
                } else {
                    let imageUrl = `http://localhost:3001/image/${product.imagen}`
                    return res.json({ product, imageUrl });
                }
            })
            .catch(error => res.send(error));
    },
}

module.exports = apiProducts;