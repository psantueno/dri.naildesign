//array con lista de esmaltes
const listaDeProductos = require("../database/BaseDatosProducto");
//array con lista de maquillaje
const listaDeProductos2 = require("../database/BaseDatosProducto2");
//array con titles de las distintas views para aplicar en el head.
const titlesOfPages = ["Shop", "Editar Productos", "Agregar productos", "Detalle del Producto"];
// array con las hojas de estilos para aplicar en el head.
const stylesOfPages = ['rel=stylesheet href=/css/detailProduct.css', 'rel=stylesheet href=/css/formsproducts.css'];
const fs = require("fs")
const path = require("path")
const productsFilePath = path.join(__dirname, '../database/dBproducts.json');
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


//Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada
const categoriasProductos= [];

//se actualiza el array con las categorias de los productos eliminando cualquier duplicado.
productsJson.forEach(product=>{

    if (!categoriasProductos.includes(product.categoria)){
        categoriasProductos.push(product.categoria)
    }
});






const productsController = { 
    
    listProducts: (req, res) => {
        //console.log(productsJson)
        res.render("listProducts", {title: titlesOfPages[0], style1:"", style2:"", listaEsmaltes: listaDeProductos, listaMaquillaje: listaDeProductos2,productsJson,categoriasProductos});
    },

    detailProduct: (req, res) => {

        let id = parseInt(req.params.id)
        let productoDeUrl= productsJson.find(product => id===product.id)
        
        console.log(productoDeUrl)
        
        res.render("detailProduct", {title: "detalle de producto", style1:'rel=stylesheet href=/css/detailProduct.css',productoDeUrl:productoDeUrl});
    },

    addNewProduct: (req, res) => {
        res.render("addProduct", {title: titlesOfPages[2], style1:stylesOfPages[1], style2:""});
    },

    editProduct: (req, res) => {
        let id = parseInt(req.params.id)
        let productoDeUrl= productsJson.find(product => {
            if(id===product.id){
                return product
            }
        })


        res.render("editProduct", {title: titlesOfPages[1], style1:stylesOfPages[1], style2:"",productoDeUrl});
    },
    
    
    updateProduct: (req, res) => {
        let id = parseInt(req.params.id)
        //console.log(req.body)
        let productoDeUrl= productsJson.find(product => {
            if(id===product.id){
                return product
            }
        })
        console.log(productoDeUrl)
        console.log(req.params)


        res.send("fui por put")
    },
}

module.exports = productsController;