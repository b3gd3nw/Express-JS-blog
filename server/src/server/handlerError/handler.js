module.exports.basicErrorHandler = (err, req, res, next) => {
    if (!err.message || !err.status) {
      return res.status(500).send('Server Error');
    }
    console.log(err);
    res.status(err.status).send(err.message);
  };