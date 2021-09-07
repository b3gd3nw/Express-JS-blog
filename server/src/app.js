const express = require('express');
const cors = require('cors');
const router = require('./server/router');
const HandlerErrors = require('./server/handlerError/handler');

const createApp = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/api', router);

    app.use(HandlerErrors.basicErrorHandler);

    return app;
}

module.exports = createApp;
