const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class badRequestError extends Error {
  constructor(property , invalidProperty = null, reason = null) {
    const errorMessage = invalidProperty ?  `${property} is invalid in the request` : `${property} is missing from the request body`;
    super(errorMessage);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.errorMessage = errorMessage;
    this.reason = reason ? reason : ReasonPhrases.BAD_REQUEST
    this.name = "badRequestError";
  }
}

module.exports = {
    badRequestError
}