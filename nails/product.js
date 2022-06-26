const Sequelize = require('sequelize');
const database = require('./src/database/db');
 
const Product = db.sequelize.define('product', {
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
    precio: {
        type: Sequelize.INTEGER
    },
    imagen: {
        type: Sequelize.STRING(26)
    },
    category: {
        type: Sequelize.STRING(10)
    },
    descuento: {
        type: Sequelize.INTEGER
    },
    cantidad: {
        type: Sequelize.STRING
    },
    descricao: Sequelize.STRING(432)
})
 
module.exports = Product;