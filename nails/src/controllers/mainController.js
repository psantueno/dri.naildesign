const mainController = {
    
    home: (req, res) => {
        res.render("home");
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
    },

    paginaproducto: (req, res) => {
        res.render("paginaproducto");
    },
}

module.exports = mainController;