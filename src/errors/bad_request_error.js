class badRequestError extends Error {
  constructor(propertyMissing, statusCode) {
    const errorMessage =`${propertyMissing} is missing from the request body`
    super(errorMessage);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}

module.exports = {
    badRequestError
}