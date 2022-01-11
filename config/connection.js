// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // host: 'ec2-3-214-190-189.compute-1.amazonaws.com',
    dialect: 'mysql',
    port: process.env.PORT || 38887
});

module.exports = sequelize;