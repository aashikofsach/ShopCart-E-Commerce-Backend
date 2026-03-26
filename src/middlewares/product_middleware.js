const { errorResponse } = require("../utils/error_response");
const { badRequestError } = require("../errors/bad_request_error");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

function createProductvalidator(req, res, next) {
  console.log(req.body, "we are here");
  if (!req.body.title) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("title", 420),
        ),
      );
  }
  if (!req.body.description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("description", 420),
        ),
      );
  }
  if (!req.body.categoryId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("category", 420),
        ),
      );
  }
  if (!req.body.price) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("price", 420),
        ),
      );
  }
  if (!req.body.image) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("image", 420),
        ),
      );
  }
  next();
}

module.exports = {
  createProductvalidator,
};
