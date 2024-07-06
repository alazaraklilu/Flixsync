const { Sequelize } = require('sequelize');
const config = require('./config.js')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'postgres',
});

module.exports = sequelize;

PGPASSWORD=abc123 psql -h 127.0.0.1 -U aaklilu -d Flixwe