const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

//Rutas del main.js
const mainRoutes = require("./src/routes/main.js");

//Rutas de products.js
const productsRoutes = require("./src/routes/products.js")


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

//Definiendo carpeta pública.
app.use(express.static(publicPath));

//Se configura el view engine EJS
app.set('view engine', 'ejs');

// Actualizaciòn de las rutas Acceso a login y register.
app.use('/', mainRoutes);

app.use('/products', productsRoutes);


app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './views/menu.html'));
    });

app.get('/banner', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/partials/bannerhome.html'));
})

// app.get('/product', (req, res) => {
//     res.sendFile(path.join(__dirname, './src/views/products/productpage.html'));
// })

// app.get('/product1', (req, res) => {
//     res.sendFile(path.join(__dirname, './src/views/products/agregarproduct.html'));
// })

// app.get('/product2', (req, res) => {
//     res.sendFile(path.join(__dirname, './src/views/products/editarproduct.html'));
// })

app.get('/servicios', (req, res) => { 
    res.sendFile(path.join(__dirname, './views/servicios.html'));
})