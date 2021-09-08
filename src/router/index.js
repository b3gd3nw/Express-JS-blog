const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const categoryRouter = require('./category');


router.use('/', postRouter, categoryRouter);


module.exports = router;