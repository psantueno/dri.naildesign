// ************ LIBRARIES REQUIRE'S ************ //
const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const session = require("express-session");
const methodOverride =  require('method-override'); // Para usar los métodos PUT y DELETE
const cookies = require("cookie-parser");
const Sequelize = require("sequelize");


// ************ CONFIGURACIÓN DE CARPETA PUBLIC  ************ //
const publicPath = path.resolve(__dirname, './public');

// ************ CONFIGURACIÓN EXPRESS ************ // Captura la información enviada desde el form.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// ************ CONFIGURACIÓN SESSION ************ //
app.use(session({
    secret: "This is a secret, remember",
    resave: false,
    saveUninitialized: true,

}));

// ************ ROUTERS REQUIRE'S ************ //
const mainRoutes = require("./src/routes/main.js");
const productsRoutes = require("./src/routes/products.js")
const usersRoutes = require("./src/routes/users.js")

// Levanta el servidor //
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

// ************ MIDDLEWARES REQUIRE'S  ************ //
const userLogged = require("./src/middlewares/userLogged");

// COOKIES //
app.use(cookies());

// Middleware de aplicación para verificar si hay usuario logueado y mostrar vistas y/o botones segun su rol//
app.use(userLogged);

// Llama method override para poder usar put y delete
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//Indica a express que esta es la carpeta de archivos estáticos.
app.use(express.static(publicPath));

// ************ CONFIGURACIÓN DEL TEMPLATES ENGINE - EJS ************ //
app.set('view engine', 'ejs');

// ************ ROUTERS ************ //
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// ************ CONFIGURACIONES BOOTSTRAP ************ //
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './views/menu.html'));
    });

app.get('/banner', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/partials/bannerhome.html'));
})

app.get('/servicios', (req, res) => { 
    res.sendFile(path.join(__dirname, './views/servicios.html'));
})
