//array con lista de esmaltes
const listaDeProductos = require("../database/BaseDatosProducto");
//array con lista de maquillaje
const listaDeProductos2 = require("../database/BaseDatosProducto2");
//array con titles de las distintas views para aplicar en el head.
const titlesOfPages = ["Shop", "Editar Productos", "Agregar productos", "Detalle del Producto"];
// array con las hojas de estilos para aplicar en el head.
const stylesOfPages = ['rel=stylesheet href=/css/detailProduct.css', 'rel=stylesheet href=/css/formsproducts.css'];

const productsController = { 
    
    listProducts: (req, res) => {
        res.render("listProducts", {title: titlesOfPages[0], style1:"", style2:"", listaEsmaltes: listaDeProductos, listaMaquillaje: listaDeProductos2});
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