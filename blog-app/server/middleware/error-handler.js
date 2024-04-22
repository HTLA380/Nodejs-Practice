const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(err.statusCode).json({
    msg: err.message,
    success: false,
  });
};

module.exports = errorHandlerMiddleware;
