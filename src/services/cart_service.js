// const products = [];

const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");

class CartService {
  constructor(respository) {
    this.respository = respository;
  }

  async updateCart(cartId, productId, shouldAddProduct = true) {
    try {
      const response = await this.respository.updateCart(
        cartId,
        productId,
        shouldAddProduct,
      );
      return response;
    } catch (error) {
      if (error.name === "NotFoundError") throw error;
      console.log("category Service ", error);
      throw new internalServerError();
    }
  }
}

module.exports = CartService;
