const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const {
  createProductService,
  getProductsServices,
  getProductService,
} = require("../services/product_service");

// const ProductService = require("../services/product_service");
// const CategoryService = require("../services/category_service");
// const FakeStoreRepository = require("../repositories/fake_store_repository");
// const CategoryRepository = require("../repositories/category_repository");
const { errorResponse } = require("../utils/error_response");
const { UserRepository } = require("../repositories");
const { UserService } = require("../services");
const { NODE_ENV } = require("../config/server_config");
// const ProductRepository = require("../repositories/product_repository");

const userService = new UserService(new UserRepository());

async function createUser(req, res) {
  try {
    // here we do db interaction
    console.log(req.body, "thisbis line 18");

    const response = await userService.createUser(req.body);

    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.CREATED + " User",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong user controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

async function signInUser(req, res) {
  try {
    console.log(
      req.body,
      " req body when user try to login by entering credentials",
    );

    const response = await userService.signInUser(req.body);
    res.cookie("token", response , {httpOnly : true , maxAge : 7*24*60*60*1000 , secure : NODE_ENV==="production"})
    return res.status(StatusCodes.OK).json({
      success: true,
      error: null,
      message: ReasonPhrases.OK + " user",
      data: NODE_ENV==="production" ? true : response,
    });
  } catch (error) {
    console.log("something went wrong in user controller ", error);
    return res.status(error.statusCode).json(errorResponse(error.reasonPhrase, error));
  }
}

module.exports = {
  createUser,
  signInUser,
};
