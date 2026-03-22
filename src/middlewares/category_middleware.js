const { errorResponse } = require("../utils/error_response");
const { badRequestError } = require("../errors/bad_request_error");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

function createCategoryValidator(req, res, next) {
  console.log(req.body, "we are here");
  if (!req.body.name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(
          ReasonPhrases.BAD_REQUEST,
          new badRequestError("name", 420),
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

  next();
}

module.exports = {
  createCategoryValidator,
};
