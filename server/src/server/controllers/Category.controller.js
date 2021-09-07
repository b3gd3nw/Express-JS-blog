const db = require('../models/index');
const ErrorHandler = require('../handlerError/handler');
const { BlogPost } = require('../models/index');

module.exports.createCategory = async (req, res, next) => {
    const { name } = req.body;
    try {
        const category = await db.BlogCategory.create({
            name
        })
        return res.status(201).json({"status": "ok", "message": "Created Blog Category", data: category})
    }catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}