module.exports = (sequelize, DataTypes) => {

    let alias = "Categories";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(9),
            allowNull: false
        },

    };

    let config = {
        tablename: 'category',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

     // ************ RELATIONS ************ //

     Category.associate = function (models) {
        
        Category.hasMany(models.Products, {   
            as: "products",
            foreignKey: "category_id"
        })
    }

    return Category;
}