module.exports = (sequelize, DataTypes) => {

    let alias = "Products";

    let cols = {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
   
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    
    precio: {
        type: DataTypes.INTEGER
    },
    
    imagen: {
        type: DataTypes.STRING(26)
    },
    
    category_id: {
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
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    // ************ RELATIONS ************ //

    Product.associate = function (models) {
        
        Product.belongsTo(models.Categories, {   // models.Categories -> Categories es el valor de alias en Category.js
            as: "category",
            foreignKey: "category_id"
        })
    }
    
    return Product;
}



