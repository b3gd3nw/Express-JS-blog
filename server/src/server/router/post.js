const postRouter = require('express').Router()
const postController = require('../controllers/Post.controller');

postRouter.post(
    '/create-post',

    postController.createPost
);

module.exports = postRouter;