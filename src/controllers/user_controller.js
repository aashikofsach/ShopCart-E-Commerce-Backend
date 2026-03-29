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
const {  UserRepository } = require("../repositories");
const { UserService } = require("../services");
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


module.exports = {
  createUser,
  
};
