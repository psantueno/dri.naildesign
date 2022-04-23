const listaDeProductos = require("../database/BaseDatosProducto");

const titlesOfPages = ["Shop", "Editar Productos", "Agregar productos", "Detalle del Producto"];

const stylesOfPages = ['rel=stylesheet href=/css/detailProduct.css', 'rel=stylesheet href=/css/formsproducts.css'];

const productsController = { 
    
    listProducts: (req, res) => {
        res.render("listProductsDinamic", {title: titlesOfPages[0], style1:"", style2:"", listaProductosEnviar:listaDeProductos});
    },

    detailProduct: (req, res) => {
        res.render("detailProduct", {title: titlesOfPages[3], style1:stylesOfPages[0], style2:""});
    },

    addNewProduct: (req, res) => {
        res.render("addProduct", {title: titlesOfPages[2], style1:stylesOfPages[1], style2:""});
    },

    editProduct: (req, res) => {
        res.render("editProduct", {title: titlesOfPages[1], style1:stylesOfPages[1], style2:""});
    },

}

module.exports = productsController;