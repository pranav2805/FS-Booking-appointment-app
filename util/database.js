const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'qwertyuiop', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;