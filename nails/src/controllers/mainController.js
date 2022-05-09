const fs = require("fs")
const path = require("path")
// base de datos vieja creada Diego const productsFilePath = path.join(__dirname, '../database/dBproducts.json');
const productsFilePath = path.join(__dirname, '../database/products.json');
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lista de productos total


//Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada
const categoriasProductos= [];

//se actualiza el array con las categorias de los productos eliminando cualquier duplicado.
productsJson.forEach(product=>{

    if (!categoriasProductos.includes(product.categoria)){
        categoriasProductos.push(product.categoria)
    }
});





const mainController = {
    
    home: (req, res) => {
        //console.log(categoriasProductos)
        //console.log(productsJson)


            res.render("home", {productsJson, categoriasProductos});

    },

    registro: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("registro");
    },
    
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("login");
    },

    cart: (req, res) => {
        res.render("carrito");
    }

}

module.exports = mainController;