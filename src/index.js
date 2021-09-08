const http = require('http');
const app = require('./app')();
require('dotenv').config();
require('./dbMysql/mysql');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});