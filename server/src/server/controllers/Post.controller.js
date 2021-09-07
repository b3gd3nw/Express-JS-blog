const db = require('../models/index');
const ErrorHandler = require('../handlerError/handler');

module.exports.createPost = async (req, res, next) => {
    const { title, text, image } = req.body;
    try {
        const blog = await db.BlogPost.create({
            title,
            image,
            text,
        })
        res.status(201).json({"status": "ok", "message": "Created Blog Post", data: blog})
    }catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}