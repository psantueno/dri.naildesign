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


// ************ CONFIGURACIONES MYSQL ************ //
//parametros de conexión a BD - hay que pasar al archivo ./src/database/db//
const sequelize = new Sequelize("nails","root","Acontec3",{
    host: "localhost",
    dialect: "mysql"
});

// conectar BD //
sequelize.authenticate()
    .then(() => {
        console.log("conexión BD OK")
    })
    .catch( error => {
        console.log("ERROR BD!!!")
    })


//BD PRODUCTS - definición de modelo Productos//
const productsModel = sequelize.define("products",{
    idproducts: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(22),
        allowNull: false
    },
    precio: {type: Sequelize.INTEGER},
    imagen: {type: Sequelize.STRING(26)},
    category: {type: Sequelize.STRING(10)},
    descuento: {type: Sequelize.INTEGER},
    cantidad: {type: Sequelize.STRING},
    descricao: Sequelize.STRING(432)
});

//BD USERS - definición de modelo Usuarios//
const usersModel = sequelize.define("users",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(9),
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING(13),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(23),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    terminos: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    rol: {
        type: Sequelize.STRING(13),
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING(20),
        allowNull: false
    },



});

// productsModel.findAll({attributes:['nombre','precio']})
//     .then(products => {
//         const resultado = JSON.stringify(products)
//         console.log(resultado)
//     })
//     .catch(error =>{
//         console.log("error")
//     })

// usersModel.findAll({attributes:['nombre','rol']})
//     .then(users => {
//         const resultado = JSON.stringify(users)
//         console.log(resultado)
//     })
//     .catch(error =>{
//         console.log("error")
//     })