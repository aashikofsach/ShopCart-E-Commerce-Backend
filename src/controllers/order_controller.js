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
const { OrderRepository, CartRepository } = require("../repositories");
const { OrderService } = require("../services");
// const ProductRepository = require("../repositories/product_repository");

const orderService = new OrderService(
  new OrderRepository(),
  new CartRepository(),
);

async function createOrder(req, res) {
  try {
  
    const response = await orderService.createOrder(
      req.user.id,
     
    );

    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      error: null,
      message: "Created Order Successfully",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong Order Controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}



async function getOrder(req, res) {
  try {
  
    const response = await orderService.fetchOrderDetails(
      req.user.id, req.params.id
     
    );

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: "Fetched Order Successfully",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong Order Controller", error);
    return res
      .status(error.statusCode)
      .json(errorResponse(error.ReasonPhrases, error));
  }
}







module.exports = {
  createOrder,
  getOrder
};
