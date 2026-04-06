const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { errorResponse } = require("../utils/error_response");
const { unauthorizedError } = require("../errors/unauthorized_error");
const { verifyToken } = require("../utils/auth");

const isLoggedIn = (req, res, next) => {
  if (!req.cookies || !req.cookies.token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(errorResponse(ReasonPhrases.UNAUTHORIZED, new unauthorizedError()));
let decodedToken ;
  try {
     decodedToken = verifyToken(req.cookies.token);
    console.log("here decoded value output ", decodedToken);
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(errorResponse(error.message, error));
  }
  // here we do that destruturing so that only can send desired info, and not unneccessary inforamtion

  req.user = { email: decodedToken.email, id: decodedToken.id };

  next();
};

module.exports = {
  isLoggedIn,
};
