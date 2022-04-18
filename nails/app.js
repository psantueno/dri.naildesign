const express = require('express');
const app = express();
const path = require('path');
const rutasUsuarios = require("./src/routers/users.js")

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'))

//Se configura el view engine EJS
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, './src/views/users'))

// Actualizaciòn de las rutas Acceso a login y register
app.use('/', rutasUsuarios);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/home.html'));
})


app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './views/menu.html'));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/users/login.html'));
})

app.get('/banner', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/partials/bannerhome.html'));
})


app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/users/registro.html'));
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/products/carrito.html'));
})

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/products/productpage.html'));
})

app.get('/product1', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/products/agregarproduct.html'));
})

app.get('/product2', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/products/editarproduct.html'));
})

app.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, './views/servicios.html'));
})