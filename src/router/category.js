const categoryRouter = require('express').Router()
const categoryController = require('../controllers/Category.controller');

categoryRouter.post(
    '/create-category',

    categoryController.createCategory
);

module.exports = categoryRouter;