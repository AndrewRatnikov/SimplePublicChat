const Sequelize = require('sequelize');
const sqlite = require('sqlite3');

const sequilize = new Sequelize(':memory:', 'username', '', { host: 'localhost', dialect: 'sqlite', operatorsAliases: false });

module.exports = sequilize;