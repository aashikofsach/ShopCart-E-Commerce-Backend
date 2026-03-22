const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class internalServerError extends Error {
  constructor() {
    const errorMessage =`Something Went Wrong, Please try Again Later`
    super(errorMessage);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    this.errorMessage = errorMessage;
    this.reasonPhrase = ReasonPhrases.INTERNAL_SERVER_ERROR
    this.name="internalServerError";
  }
}

module.exports = {
    internalServerError
}