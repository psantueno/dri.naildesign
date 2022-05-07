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


const productsController = { 
    
    listProducts: (req, res) => {
        res.render("listProducts", {productsJson, categoriasProductos});
    },

    detailProduct: (req, res) => {
        // console.log(req.params);
        // console.log(req.params.id);
        const id = parseInt(req.params.id);
        // console.log(id);
        // console.log(req.params.id);
        const productoDeUrl= productsJson.find(product => product.id===id);
        // console.log(productoDeUrl);
        res.render("detailProduct", {productoDeUrl});
    },

    addNewProduct: (req, res) => {
        res.render("addProduct");
    },

    editProduct: (req, res) => {
        const id = parseInt(req.params.id);
        const productEdited = productsJson.find(product => product.id === id);
        // console.log(productoDeUrl);
        // console.log(productoDeUrl);
        res.render("editProduct", {productEdited});
       
    },
    
    
    updateProduct: (req, res) => {
        let id = parseInt(req.params.id)
        //console.log(req.body)
        /*
        let productoDeUrl= productsJson.find(product => {
            if(id===product.id){
                return product
            }
        })*/
        //console.log(productoDeUrl)
        //console.log(req.params)
        //console.log(req.body)
        console.log(req.body)

        console.log(req.body.imagenproducto)
			
          

        productsJson.forEach(product => {if(product.id===id){

            if (req.body.imagenproducto === ""){

                product.nombre=req.body.nombreproducto
                product.descripcion=req.body.descripcionproducto
                product.precio=parseInt(req.body.precioproducto)
                product.descuento=parseInt(req.body.descuentoproducto)
                product.categoria=req.body.categoriaproducto
                
			
            } else {

            product.nombre=req.body.nombreproducto
			product.descripcion=req.body.descripcionproducto
			product.precio=parseInt(req.body.precioproducto)
			product.descuento=parseInt(req.body.descuentoproducto)
			product.categoria=req.body.categoriaproducto
			product.imagen="/image/"+req.body.imagenproducto

            }
			
			
		}})

        //console.log(products) 
		//res.send("entro a update")
		let productsUpdatedDB=JSON.stringify(productsJson)
		//console.log(productsUpdatedDB)
		fs.writeFileSync(productsFilePath,productsUpdatedDB)
		//let product = productsJson.find(product => product.id===converted_id1)
		//console.log(req.body) 
        
		res.redirect('/products')


        //res.send("fui por put")
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

    destroy: (req, res) => {
		let id = parseInt(req.params.id);
		let productsUpdate = productsJson.filter(element => element.id !== id);
		productsToDb = JSON.stringify(productsUpdate);
		fs.writeFileSync(productsFilePath, productsToDb);
        // console.log("kajdsfjkasd fskadfñkasdfj ks")
		res.redirect("/products");
	}
}

module.exports = productsController;