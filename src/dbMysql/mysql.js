const mysql = require('mysql2');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config/mysqlConfig.json');
const config = require(configPath)[env];

const connection = mysql.createConnection({
    host    : config.host,
    user    : config.username,
    database: config.database,
    password: config.password
});

connection.connect();

module.exports = mysql;
