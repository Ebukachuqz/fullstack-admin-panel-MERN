const { StatusCodes } = require("http-status-codes");

const errorHandler = (error, req, res, next) => {
  let customError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message:
      error.message || "Oops! Something went wrong. Please Try again later.",
  };

  // Handling Mongodb Duplication Error
  if (error.code && error.code === 11000) {
    customError.message = `The ${Object.keys(
      error.keyValue
    )} already exists, please pick another.`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json(customError.message);
};

module.exports = errorHandler;
