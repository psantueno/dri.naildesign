
module.exports = (sequelize, DataTypes) => {
    let alias = "Categories";
    let cols = {
        id_category: {
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
        
            return Category;
        }