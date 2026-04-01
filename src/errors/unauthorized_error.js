const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class unauthorizedError extends Error {
  constructor() {
    const errorMessage =`password is not correct, try again later`
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