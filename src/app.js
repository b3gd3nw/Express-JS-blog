const express = require('express');
const cors = require('cors');
const router = require('./router');
const HandlerErrors = require('./handlerError/handler');

const createApp = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/', router);

    app.use(HandlerErrors.basicErrorHandler);

    return app;
}

module.exports = createApp;
