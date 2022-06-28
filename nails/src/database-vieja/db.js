const express = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize("nails","root","Acontec3",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;