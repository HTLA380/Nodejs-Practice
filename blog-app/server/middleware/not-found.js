const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).send("Page not found");
};

module.exports = notFoundMiddleware;
