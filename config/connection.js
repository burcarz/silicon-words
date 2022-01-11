// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database
const sequelize = process.env.POSTGRE_URL
    ? new Sequelize(process.env.POSTGRE_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    dialect: 'postgres',
    port: process.env.PORT
});

module.exports = sequelize;