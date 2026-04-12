const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class unauthorizedError extends Error {
  constructor(message) {
    const errorMessage =message ? message : `password is not correct, try again later`
    super(errorMessage);
    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.errorMessage = errorMessage;
    this.reasonPhrase = ReasonPhrases.UNAUTHORIZED
    this.name="unauthorizedError";
  }
}

module.exports = {
    unauthorizedError
}