const express = require('express');
const Router = express.Router();

Router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send('GOOD');
})

module.exports = Router;