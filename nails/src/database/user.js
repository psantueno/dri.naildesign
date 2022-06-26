const Sequelize = require('sequelize');
const database = require('./db');

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