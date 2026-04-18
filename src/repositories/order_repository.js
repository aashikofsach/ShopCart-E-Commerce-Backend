const { OrderProducts } = require("../models");
const Order = require("../models/order");
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
        throw error ;
    }
  }
}

//  async getProduct()

module.exports = OrderRepository;
