const express = require('express');

const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use('/public', express.static('public'));

    return app;
}

module.exports = createApp;
