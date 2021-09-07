const db = require('../models/index');
const ErrorHandler = require('../handlerError/handler');

module.exports.createCategory = async (req, res, next) => {
    const { name } = req.body;
    try {
        const category = await db.BlogCategory.create({
            name
        })
        res.status(201).json({"status": "ok", "message": "Created Blog Category", data: category})
    }catch(err) {
        return ErrorHandler.basicErrorHandler(err);
    }
}