const titlesOfPages = ["Home", "Login", "Registro", "Tu carrito"];

const stylesOfPages = ['rel=stylesheet href=assets/css/style.css', 'rel=stylesheet href=/css/styles-carrito.css'];


const mainController = {
    
    home: (req, res) => {
        res.render("home", {title: titlesOfPages[0], style1:"", style2:""});
    },

    registro: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("registro", {title: titlesOfPages[2], style1:"", style2:""});
    },
    
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("login", {title: titlesOfPages[1], style1:"", style2:""});
    },

    cart: (req, res) => {
        res.render("carrito",  {title: titlesOfPages[3], style1: stylesOfPages[0], style2: stylesOfPages[1]});
    }

}

module.exports = mainController;