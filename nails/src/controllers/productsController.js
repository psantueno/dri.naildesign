const productsController = {
    
    listProducts: (req, res) => {
        res.render("listProducts");
    },

    detailProduct: (req, res) => {
        res.render("detailProduct");
    },

    addNewProduct: (req, res) => {
        res.render("addProduct");
    },

    editProduct: (req, res) => {
        res.render("editProduct");
    }
}

module.exports = productsController;