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
const { CartRepository } = require("../repositories");
const { CartService } = require("../services");
// const ProductRepository = require("../repositories/product_repository");

const cartService = new CartService(
  new CartRepository()
);

async function updateCart(req, res) {
  try {
    // below is handling so that we cna send data from url x encoded and from json body  
    const shouldAddProduct = (req.body.shouldAddProduct === true || req.body.shouldAddProduct==="true") ? true : false
    const response = await cartService.updateCart(req.user.id,req.params.id , req.body.productId, shouldAddProduct);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: "Updated Cart Successfully",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong Cart Controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}

module.exports = {
  updateCart
};
