
module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {
    id_products: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(22),
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER
    },
    imagen: {
        type: DataTypes.STRING(26)
    },
    category: {
        type: DataTypes.STRING(10)
    },
    id_categories: {
        type: DataTypes.INTEGER
    },
    descuento: {
        type: DataTypes.INTEGER
    },
    cantidad: {
        type: DataTypes.STRING
    },
    descripcion: DataTypes.STRING(432)
}

    let config = {
        tablename: 'product',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}