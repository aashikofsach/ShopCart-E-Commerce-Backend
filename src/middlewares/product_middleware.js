const {errorResponse} = require("../utils/error_response")
const {badRequestError} = require("../errors/bad_request_error");

function createProductvalidator(req, res, next) {
    console.log(req.body, "we are here")
  if (!req.body.title) {
    return res.status(400).json(errorResponse("title is not present inside the req body", new badRequestError("there is not title present ",420)));
  }


  next();
}

module.exports = {
  createProductvalidator,
};
