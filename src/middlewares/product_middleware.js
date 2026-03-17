const {errorResponse} = require("../utils/error_response")

function createProductvalidator(req, res, next) {
    console.log(req.body, "we are here")
  if (!req.body.title) {
    return res.status(400).json(errorResponse("title is not present inside the req body", {message : "req body nopt have the title data"}));
  }


  next();
}

module.exports = {
  createProductvalidator,
};
