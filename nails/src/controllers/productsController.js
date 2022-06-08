const fs = require("fs");
const path = require("path");

// ************ BASE DATA PRODUCTS ************ //
const productsFilePath = path.join(__dirname, '../database/products.json');
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lista de productos total


//Array para almacenar las categorìas de los productos y poder hacer bien dinamica la vista y la programaciòn màs condensada
const categoriasProductos = [];

//se actualiza el array con las categorias de los productos eliminando cualquier duplicado.
productsJson.forEach(product => {
    if (!categoriasProductos.includes(product.categoria)) {
        categoriasProductos.push(product.categoria)
    }
});

// ************ START CONTROLLER ************ //
const productsController = {

    listProducts: (req, res) => {
        res.render("listProducts", { productsJson, categoriasProductos });
    },

    detailProduct: (req, res) => {
        ;
        const id = parseInt(req.params.id);
        const productoDeUrl = productsJson.find(product => product.id === id);
        res.render("detailProduct", { productoDeUrl });
    },

    addNewProduct: (req, res) => {
        res.render("addProduct", { categoriasProductos });
    },

    store: (req, res) => {

        const newProduct = req.body;                             // Trae los datos del form create.
        newProduct.id = productsJson.length + 1;                 // asigno un ID.
        newProduct.imagen = req.file.filename;                   // asocio la imagen al producto nuevo.
        productsJson.push(newProduct);                           // agrego el producto creado al array de objetos de nuestra base de datos.
        newProductReady = JSON.stringify(productsJson);          // convierto a JSON para poder almacenarlo en dataBase.
        fs.writeFileSync(productsFilePath, newProductReady);     // escribo en el archivo products.json (database).
        res.redirect("/products");
    },

    editProduct: (req, res) => {
        const id = parseInt(req.params.id);
        const productEdited = productsJson.find(product => product.id === id);
        res.render("editProduct", { productEdited, categoriasProductos });

    },

    updateProduct: (req, res) => {
        let id = parseInt(req.params.id);

        productsJson.forEach(product => {
            if (product.id === id) {

                if (req.file === undefined) {

                    product.nombre = req.body.nombreproducto;
                    product.descripcion = req.body.descripcionproducto;
                    product.precio = parseInt(req.body.precioproducto);
                    product.descuento = parseInt(req.body.descuentoproducto);
                    product.categoria = req.body.categoriaproducto;
                }
                else {
                    product.nombre = req.body.nombreproducto;
                    product.descripcion = req.body.descripcionproducto;
                    product.precio = parseInt(req.body.precioproducto);
                    product.descuento = parseInt(req.body.descuentoproducto);
                    product.categoria = req.body.categoriaproducto;
                    product.imagen = req.file.filename;
                }
            }
        })
        let productsUpdatedDB = JSON.stringify(productsJson)
        fs.writeFileSync(productsFilePath, productsUpdatedDB)
        res.redirect('/products')
    },

    destroy: (req, res) => {
        let id = parseInt(req.params.id);
        let productsUpdate = productsJson.filter(element => element.id !== id);
        productsToDb = JSON.stringify(productsUpdate);
        fs.writeFileSync(productsFilePath, productsToDb);
        res.redirect("/products");
    }
}

module.exports = productsController;