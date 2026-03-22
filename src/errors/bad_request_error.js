const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class badRequestError extends Error {
  constructor(propertyMissing) {
    const errorMessage =`${propertyMissing} is missing from the request body`
    super(errorMessage);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.errorMessage = errorMessage;
    this.reasonPhrase = ReasonPhrases.BAD_REQUEST;
    this.name = "badRequestError";
  }
}

module.exports = {
    badRequestError
}