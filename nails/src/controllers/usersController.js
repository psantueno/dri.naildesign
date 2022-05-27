const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, '../database/users.json');
let usersJson = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); // lista de usuarios total


//Array para almacenar los rols de los usuarios
const rolUsuers = [];

//se actualiza el array con los roles de los users eliminando cualquier duplicado.
usersJson.forEach(users => {
    if (!rolUsuers.includes(users.rol)) {
        rolUsuers.push(users.rol)
    }
});


const usersController = {

    listUsers: (req, res) => {
        res.render("listUserss", { usersJson, usersUsers });
    },

    detailUsers: (req, res) => {
        ;
        const id = parseInt(req.params.id);
        const usersDeUrl = usersJson.find(users => users.id === id);
        res.render("detailUsers", { usersDeUrl });
    },

    addNewUser: (req, res) => {

        res.render("addUsers", { rolUsers });
    },

    editUsers: (req, res) => {
        const id = parseInt(req.params.id);
        const usersEdited = usersJson.find(users => users.id === id);
        res.render("editUsers", { usersEdited, rolUsers });

    },

    updateUsers: (req, res) => {
        let id = parseInt(req.params.id);

        usersJson.forEach(users => {
            if (users.id === id) {

                if (req.file === undefined) {

                    users.nombre = req.body.nombreusers;
                    users.mail = req.body.mailusers;
                    users.telefono = req.body.telefonousers;
                    users.password = req.body.passwordusers;
                    users.rol = req.body.rolUsers;
                }
                else {
                    users.nombre = req.body.nombreusers;
                    users.mail = req.body.mailusers;
                    users.telefono = req.body.telefonousers;
                    users.password = req.body.passwordusers;
                    users.rol = req.body.rolusers;
                    users.imagen = req.file.filename;
                }
            }
        })
        let usersUpdatedDB = JSON.stringify(usersJson)
        fs.writeFileSync(usersFilePath, usersUpdatedDB)
        res.redirect('/users')
    },

    store: (req, res) => {

        const newusers = req.body;                             // Trae los datos del form create.
        newusers.id = UsersJson.length + 1;                 // asigno un ID.
        newusers.imagen = req.file.filename;                   // asocio la imagen del cliente (si hay).
        usersJson.push(newUsers);                           // agrego el usuario creado al array de objetos de nuestra base de datos.
        newUsersReady = JSON.stringify(usersJson);          // convierto a JSON para poder almacenarlo en dataBase.
        fs.writeFileSync(usersFilePath, newusersReady);     // escribo en el archivo users.json (database).
        res.redirect("/users");
    },

    destroy: (req, res) => {
        let id = parseInt(req.params.id);
        let usersUpdate = usersJson.filter(element => element.id !== id);
        usersToDb = JSON.stringify(usersUpdate);
        fs.writeFileSync(usersFilePath, usersToDb);
        res.redirect("/users");
    }
}

module.exports = usersController;