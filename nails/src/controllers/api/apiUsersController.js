const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");


// ************ BASE DATA USERS ************ //
const db = require('../../database/models');
const { Users } = db;


// ************ START CONTROLLER ************ //
const usersController = {

  //DEVOLVER LA LISTA DE USUARIOS  
    listUsers: (req, res) => {
        Users.findAll()
            .then(users => {
                //res.send( users)
                let respuestaApi={}       
                let usersApi= users.map(x => {
                        let usuarioApi={}
                        usuarioApi.id = x.id
                        usuarioApi.name = `${x.nombre} ${x.apellido}`
                        usuarioApi.email = x.email
                        usuarioApi.detail = `http://localhost:3001/api/users/${x.id}`

                        return usuarioApi
                })

                respuestaApi.count= users.length
                respuestaApi.users = usersApi  
                

                return res.send(JSON.stringify(respuestaApi))



            })
            .catch(error => res.send(error));
    },


    detailLogeado: (req, res) => {
//DEVOLVER EL USUARIO LOGEADO 
        Users.findByPk(req.session.userLogin.id)
        .then(user => {
            //return res.render('detailUser', { user });
            //res.send( users)
            //let arraykeys= user.keys
            //console.log(arraykeys)

                        let usuarioApi= {}
                        usuarioApi.id = user.id
                        usuarioApi.nombre = user.nombre
                        usuarioApi.apellido = user.apellido
                        usuarioApi.email = user.email
                        usuarioApi.terminos = user.terminos
                        usuarioApi.imagen = user.imagen
                        usuarioApi.created_at=user.created_at
                        usuarioApi.updated_at=user.updated_at

            return res.send(JSON.stringify(usuarioApi))
            //return res.send(JSON.stringify(usuarioApi))

        })
        .catch(error => res.send(error));





        // Users.findByPk(req.session.userLogin.id)
        //     .then(user => {
        //         //return res.render('detailUser', { user });
        //         //res.send( users)
        //         let respuestaApi={}       
        //         let usersApi= users.map(x => {
        //                 let usuarioApi= {}
        //                 usuarioApi.id = x.id
        //                 usuarioApi.name = `${x.nombre} ${x.apellido}`
        //                 usuarioApi.email = x.email
        //                 usuarioApi.detail = `http://localhost:3001/api/users/${x.id}`

        //                 return usuarioApi
        //         })

        //         respuestaApi.count= users.length
        //         respuestaApi.users = usersApi  
                

        //         return res.send(JSON.stringify(user))






        //     })
        //     .catch(error => res.send(error));
    },

    detail: (req, res) => {
        //DEVOLVER EL USUARIO DE LA URL 
                Users.findByPk(req.params.id)
                .then(user => {
                    //return res.render('detailUser', { user });
                    //res.send( users)
                    console.log(user)                    
                    let usuarioApi= {}
                    usuarioApi.id = user.id
                    usuarioApi.nombre = user.nombre
                    usuarioApi.apellido = user.apellido
                    usuarioApi.email = user.email
                    usuarioApi.terminos = user.terminos
                    usuarioApi.imagen = `http://localhost:3001/api/imagenUser/${user.id}`
                    usuarioApi.created_at=user.created_at
                    usuarioApi.updated_at=user.updated_at


                    if(Object.keys(usuarioApi).length === 0){
                      return res.send("El usuario que intenta acceder no existe");
                    //return res.send(JSON.stringify(usuarioApi))
                    //return res.send((isEmpty))
                    } else {
                        
                        return res.send(JSON.stringify(usuarioApi));
                    }
        
                    
                        
                    
        
                })
                .catch(error => res.send(error));
        
        
        
        
        
                // Users.findByPk(req.session.userLogin.id)
                //     .then(user => {
                //         //return res.render('detailUser', { user });
                //         //res.send( users)
                //         let respuestaApi={}       
                //         let usersApi= users.map(x => {
                //                 let usuarioApi= {}
                //                 usuarioApi.id = x.id
                //                 usuarioApi.name = `${x.nombre} ${x.apellido}`
                //                 usuarioApi.email = x.email
                //                 usuarioApi.detail = `http://localhost:3001/api/users/${x.id}`
        
                //                 return usuarioApi
                //         })
        
                //         respuestaApi.count= users.length
                //         respuestaApi.users = usersApi  
                        
        
                //         return res.send(JSON.stringify(user))
        
        
        
        
        
        
                //     })
                //     .catch(error => res.send(error));
            },


   //************ PAGINA "/users/registro" ************//


}

module.exports = usersController;