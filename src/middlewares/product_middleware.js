const { errorResponse } = require("../utils/error_response");
const { badRequestError } = require("../errors/bad_request_error");

function createProductvalidator(req, res, next) {
  console.log(req.body, "we are here");
  if (!req.body.title) {
    return res
      .status(400)
      .json(
        errorResponse(
          "title is not present inside the req body",
          new badRequestError("title", 420),
        ),
      );
  }
  if (!req.body.description) {
    return res
      .status(400)
      .json(
        errorResponse(
          "description is not present inside the req body",
          new badRequestError("description", 420),
        ),
      );
  }
  if (!req.body.category) {
    return res
      .status(400)
      .json(
        errorResponse(
          "category is not present inside the req body",
          new badRequestError("category", 420),
        ),
      );
  }
  if (!req.body.price) {
    return res
      .status(400)
      .json(
        errorResponse(
          "price is not present inside the req body",
          new badRequestError("price", 420),
        ),
      );
  }
  if (!req.body.image) {
    return res
      .status(400)
      .json(
        errorResponse(
          "image is not present inside the req body",
          new badRequestError("image", 420),
        ),
      );
  }
  next();
}

module.exports = {
  createProductvalidator,
};
