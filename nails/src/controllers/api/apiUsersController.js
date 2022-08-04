const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");


// ************ BASE DATA USERS ************ //
const db = require('../../database/models');
const { Users } = db;


// ************ START CONTROLLER ************ //
const usersController = {

    listUsers: (req, res) => {

        Users.findAll()
            .then(users => {
                res.json({ users })
            })
            .catch(error => res.send(error));
    },

    listUsers: (req, res) => {

        Users.findAll()
            .then(users => {
                
                let respuestaApi = {}
                let usersApi = users.map(x => {
                    let usuarioApi = {}
                    usuarioApi.id = x.id
                    usuarioApi.name = `${x.nombre} ${x.apellido}`
                    usuarioApi.email = x.email
                    usuarioApi.detail = `http://localhost:3001/api/users/${x.id}`

                    return usuarioApi;
                })

                respuestaApi.count = users.length
                respuestaApi.users = usersApi


                return res.json(respuestaApi);



            })
            .catch(error => res.send(error));
    },

    detailLogeado: (req, res) => {

        Users.findByPk(req.session.userLogin.id)
            .then(user => {

                let usuarioApi = {}
                usuarioApi.id = user.id
                usuarioApi.nombre = user.nombre
                usuarioApi.apellido = user.apellido
                usuarioApi.email = user.email
                usuarioApi.terminos = user.terminos
                usuarioApi.imagen = user.imagen
                usuarioApi.created_at = user.created_at
                usuarioApi.updated_at = user.updated_at

                return res.json((usuarioApi));


            })
            .catch(error => res.send(error));
    },

    detail: (req, res) => {

        Users.findByPk(req.params.id)
            .then(user => {


                if (user !== null) {
                    let usuarioApi = {}
                    usuarioApi.id = user.id
                    usuarioApi.nombre = user.nombre
                    usuarioApi.apellido = user.apellido
                    usuarioApi.email = user.email
                    usuarioApi.terminos = user.terminos
                    usuarioApi.imagen = `http://localhost:3001/image/users/${user.imagen}`
                    usuarioApi.created_at = user.created_at
                    usuarioApi.updated_at = user.updated_at

                    return res.send(usuarioApi);

                } else {
                    return res.send("El usuario que intenta acceder no existe");
                }
            })
            .catch(error => res.send(error));
    }

}

module.exports = usersController;