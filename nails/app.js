const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const session = require("express-session");
const userLogged = require("./src/middlewares/userLogged");

const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const publicPath = path.resolve(__dirname, './public');

//configuraciòn del entorno para poder capturar la informacion enviada desde el formulario. 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Configuración para usar SESSION //
app.use(session({
    secret: "This is a secret, remember",
    resave: false,
    saveUninitialized: true,

}));

// Middleware de aplicación para verificar si hay usuario y logueado y mostrar vistas y/o botones //
app.use(userLogged);


//Rutas del main.js
const mainRoutes = require("./src/routes/main.js");

//Rutas de products.js
const productsRoutes = require("./src/routes/products.js")
const usersRoutes = require("./src/routes/users.js")


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
//llamado a method override para poder usar put y delete
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
//Definiendo carpeta pública.
app.use(express.static(publicPath));


//Se configura el view engine EJS
app.set('view engine', 'ejs');

// Actualizaciòn de las rutas Acceso a login y register desde mainRoutes.
app.use('/', mainRoutes);


app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './views/menu.html'));
    });

app.get('/banner', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/partials/bannerhome.html'));
})

app.get('/servicios', (req, res) => { 
    res.sendFile(path.join(__dirname, './views/servicios.html'));
})