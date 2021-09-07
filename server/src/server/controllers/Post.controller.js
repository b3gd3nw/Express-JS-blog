const db = require('../models/index');
const ErrorHandler = require('../handlerError/handler');

module.exports.getAll = async (req, res, next) => {
    try {
        const posts = await db.BlogPost.findAll();
        return res.status(200).json({"status": "ok", "message": "All Posts", data: posts})
    } catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}

module.exports.getPostsByCategory = async (req, res, next) => {
    const { categoryId } = req.params;
    try {
        const posts = await db.BlogPost.findAll({ where: { categoryId: categoryId }}) ;
        return res.status(200).json({"status": "ok", "message": `All Posts By Category`, data: posts})
    } catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}

module.exports.createPost = async (req, res, next) => {
    const { title, text, image, categoryId } = req.body;
    try {
        const post = await db.BlogPost.create({
            title,
            image,
            text,
            categoryId
        })
        return res.status(201).json({"status": "ok", "message": "Created Blog Post", data: post})
    }catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}

module.exports.deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        await db.BlogPost.destroy({ where: { id: postId } });
        return res.status(200).json({"status": "ok", "message": "Delete Successfully"})
    } catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}