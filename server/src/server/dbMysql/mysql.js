const mysql = require('mysql');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config/mysqlConfig.json');
const config = require(configPath)[env];