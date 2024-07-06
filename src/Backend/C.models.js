// database implementation

/*
Purpose: Models represent the data structure and handle interactions with the database. 
They define the schema for the data and provide methods for querying and manipulating the data.
Functionality: They abstract the database interactions and provide a clean API for the controllers to use when performing CRUD operations.
*/

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres', // or 'mysql', 'sqlite', etc. depending on your database
    logging: false, // set to true if you want to see SQL queries
});

// Define the User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Test the database connection and sync models
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log('Models synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = { User, sequelize };