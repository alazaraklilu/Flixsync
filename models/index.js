'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*

Enables strict mode:

Ensures stricter parsing and error handling in the code.
Imports necessary modules:

fs: For file system operations.
path: For handling and transforming file paths.
Sequelize: ORM for SQL databases.
process: Provides information about the current Node.js process.
Determines environment:

Sets the environment to development by default if NODE_ENV is not specified.
Loads configuration:

Imports database configuration based on the environment from config.js.
Initializes Sequelize:

Creates a Sequelize instance using the database configuration.
Loads all models:

Reads the current directory for files ending in .js (excluding the current file and test files).
Requires each model file and initializes it with Sequelize.
Associates models:

Checks each model for associations and sets them up if they exist.
Exports the database object:

Includes the Sequelize instance and all initialized models for use elsewhere in the application.
These points summarize the key operations performed by the code in index.js.

*/