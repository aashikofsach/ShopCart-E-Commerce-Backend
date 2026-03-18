const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const {
  createProductService,
  getProductsServices,
  getProductService,
} = require("../services/product_service");

function createProduct(req, res) {
  try {
    // here we do db interaction
    console.log(req.body);

    const response = createProductService(req.body);

    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.CREATED,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

function getProducts(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)

    const response = getProductsServices();

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

function getProduct(req, res) {
  try {
    // here we do db interaction
    // console.log(req.body)
    const id = req.params.id;

    const response = getProductService(id);

    return res.status(StatusCodes.OK).json({
      sucess: true,
      error: null,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};
