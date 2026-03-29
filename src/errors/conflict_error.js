const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ConflictError extends Error {
  constructor(resource , conflict) {
    const errorMessage =`Request cannot be completed because request contains conflicting data with ${resource} resource`
    super(errorMessage);
    this.statusCode = StatusCodes.CONFLICT;
    this.errorMessage = errorMessage;
    this.reasonPhrase = ReasonPhrases.CONFLICT
    this.name="ConflictError";
    this.conflict = conflict ;
  }
}

module.exports = {
    ConflictError
}