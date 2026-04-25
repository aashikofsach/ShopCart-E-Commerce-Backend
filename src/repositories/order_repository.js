const { OrderProducts, Order, Product } = require("../models");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class OrderRepository {
  async getOrders() {
    try {
      const response = await Order.findAll();
      //   console.log(response);

      return response;
    } catch (error) {
      console.log(error, "orderRepository error");
      throw error;
    }
  }

  async getOrder(id) {
    try {
      const response = await Order.findByPk(id);
      console.log(response, "what we get ");

      return response;
    } catch (error) {
      console.log(error, "orderRepository error");
      throw error;
    }
  }

  async createOrder(userId, status) {
    try {
      const response = await Order.create({ userId, status });
      // Log the response for debugging
      console.log("API Response:", response);
      return response;
    } catch (error) {
      console.log(error, "orderRepository error");
      throw error;
    }
  }

  async destroyOrder(categoryId) {
    try {
      const response = await Order.destroy({
        where: {
          id: categoryId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is something error as", error);
      throw error;
    }
  }

  async addOrderProductsInBulk(orderProducts) {
    try {
      const response = await OrderProducts.bulkCreate(orderProducts);

      return response;
    } catch (error) {
      console.log("order repository", error);
      throw error;
    }
  }

  async fetchOrderDetails(orderId) {
    try {
      // mapping of tables which actually works here behind the scene as:
      // order table se orderId --> orderId se orderproducts table mein se productsId
      // from those productIds we get the name of products_name from product

      const response = await Order.findOne({
        where: {
          id: orderId,
        },
        include : {
          model : Product,
          attributes : ["id", "title", "price", "image"],
          through : {
            model : OrderProducts,
            attributes : ["quantity"]
          }

        },
        attributes : ["id", "status","createdAt", "updatedAt"]
      });
      return response ;
    } catch (error) {
      console.log(error, "error in order_repo");
      throw error;
    }
  }
}

//  async getProduct()

module.exports = OrderRepository;
