// const products = [];

const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");

class CategoryService {
  constructor(respository, cartRepository) {
    this.respository = respository;
    this.cartRepository = cartRepository;
  }

  async createOrder(userId) {
    try {
      // we have to check that if user have cart and then next we have to check
      // if cart contains products or not

      const cart = await this.cartRepository.getCartByUser(userId);
      if (!cart) throw new NotFoundError("Cart", "user Id", userId);

      const cartProducts = await cart.getProducts();
      if (cartProducts.length === 0) {
        throw new internalServerError();
      }

      // creating a new empty order
      const order = await this.respository.createOrder(userId, "pending");
      // above we gets an orderId --> just we have to add cartProducts to orderId / orderproducts

      const orderProductBulkCreateArray = cartProducts.map((product) => {
        return {
          orderId: order.id,
          productId: product.id,
          quantity: product.cartproducts.quantity,
        };
      });

      const orderProducts = await this.respository.addOrderProductsInBulk(
        orderProductBulkCreateArray,
      );

      order.status = "Successfull";
      await order.save();

      await this.cartRepository.clearCart(cart.id)

      return {
        orderId: order.id,
        products: orderProducts,
      };
    } catch (error) {
      if (error.name === "NotFoundError" || error.name === "unauthorizedError")
        throw error;
      console.log("order service :", error);
      throw new internalServerError();
    }
  }
}

module.exports = CategoryService;
