const usersController = {
    irARegistro: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("registro")
    },
    
    irALogin: (req, res) => {
        //res.sendFile(path.join(__dirname, './src/views/users/registro.html'))
        res.render("login")
    }
    
}

module.exports = usersController