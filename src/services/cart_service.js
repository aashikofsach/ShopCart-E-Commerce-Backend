// const products = [];

const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");
const { unauthorizedError } = require("../errors/unauthorized_error");

class CartService {
  constructor(respository) {
    this.respository = respository;
  }

  async updateCart(userId, cartId, productId, shouldAddProduct = true) {
    try {
      //is below extra layer authorization checking ki kya jarorat thi ?
      const cart = await this.respository.getCart(cartId);
      if (!cart) {
        throw new NotFoundError("cart", "id", cartId);
      }
      if (cart.userId !== userId) {
        console.log("yah tak chal raha hai baba");
        console.log("baba ke neeche", cart.userId, userId);
        throw new unauthorizedError(
          "you are not authorised to do the current operation",
        );
      }
      const response = await this.respository.updateCart(
        cartId,
        productId,
        shouldAddProduct,
      );
      return response;
    } catch (error) {
      if (error.name === "NotFoundError" || error.name === "unauthorizedError")
        throw error;
      console.log("cart Service ", error);
      throw new internalServerError();
    }
  }

  async getCartProducts(cartId, userId) {
    try {
      const cart = await this.respository.getCart(cartId);
      if (!cart) {
        throw new NotFoundError("Cart", "id", cartId);
      }
       if (cart.userId !== userId) {
        console.log("yah tak chal raha hai baba");
        console.log("baba ke neeche", cart.userId, userId);
        throw new unauthorizedError(
          "you are not authorised to do the current operation",
        );
      }

      const response = await this.respository.getCartProducts(cartId);
      return response;
    } catch (error) {
      if(error.name ==="NotFoundError" || error.name === "unauthorizedError")
        throw error
      console.log("Cart Service ", error);
      throw new internalServerError();
    }
  }

  async clearCart(cartId , userId)
  {
     try {
      const cart = await this.respository.getCart(cartId);
      if (!cart) {
        throw new NotFoundError("Cart", "id", cartId);
      }
       if (cart.userId !== userId) {
        console.log("yah tak chal raha hai baba");
        console.log("baba ke neeche", cart.userId, userId);
        throw new unauthorizedError(
          "you are not authorised to do the current operation",
        );
      }

      const response = await this.respository.clearCart(cartId);
      return response;
    } catch (error) {
      if(error.name ==="NotFoundError" || error.name === "unauthorizedError")
        throw error
      console.log("Cart Service ", error);
      throw new internalServerError();
    }

  }
}

module.exports = CartService;
