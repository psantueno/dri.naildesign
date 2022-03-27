const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(5000, () => console.log('Servidor corriendo en el puerto 5000'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, './views/menu.html'));
})

app.get('/banner', (req, res) => {
    res.sendFile(path.join(__dirname, './views/bannerhome.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'));
})