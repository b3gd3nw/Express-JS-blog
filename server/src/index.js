const http = require('http');
const app = require('./app')();
require('dotenv').config();
require('./server/dbMysql/mysql');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});