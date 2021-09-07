const postRouter = require('express').Router()
const postController = require('../controllers/Post.controller');

postRouter.get(
    '/posts',

    postController.getAll
);

postRouter.get(
    '/posts/:categoryId',

    postController.getPostsByCategory
);

postRouter.post(
    '/create-post',

    postController.createPost
);

postRouter.delete(
    '/delete-post/:postId',

    postController.deletePost
);

module.exports = postRouter;