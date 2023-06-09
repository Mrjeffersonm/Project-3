const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Recipes extends Model {}

Recipes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: 'id',
            }   
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flavor_profile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prep_time: {
            type: DataTypes.INTEGER,
        },
        cook_time: {
            type: DataTypes.INTEGER,
        },
        Instructions: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipes',
    }
);

module.exports = Recipes;