// const products = [];

const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");
const { unauthorizedError } = require("../errors/unauthorized_error");

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

      await this.cartRepository.clearCart(cart.id);

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

  async fetchOrderDetails(userId, orderId) {
    try {
      const orderObject = await this.respository.getOrder(orderId);
      if (!orderObject) {
        throw new NotFoundError("Order", "Order Id", orderId);
      }
      if (orderObject.userId !== userId) {
        throw new unauthorizedError(
          "You are not authorized to do this operation",
        );
      }
      const response = await this.respository.fetchOrderDetails(orderId);
      let totalOrderValue = 0;
      const order = {
        id: response.id,
        status: response.status,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      };
      order.products = response.products.map((product) => {
        totalOrderValue += product.price * product.orderproducts.quantity;
        return {
          title: product.title,
          id: product.id,
          price: product.price,
          image: product.image,
          quantity: product.orderproducts.quantity,
        };
      });
      order.totalOrderValue = totalOrderValue;

      return order;
    } catch (error) {
      if (error.name === "NotFoundError" || error.name === "unauthorizedError")
        throw error;
      console.log("order service :", error);
      throw new internalServerError();
    }
  }
}

module.exports = CategoryService;
