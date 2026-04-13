const { NotFoundError } = require("../errors/not_found_error");
const { Cart, CartProducts } = require("../models/index");
const { Op } = require("sequelize");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class CartRepository {
  async getCart() {
    try {
      const response = await Cart.findAll();
      //   console.log(response);

      return response;
    } catch (error) {
      console.log(error, "CartRepository error");
      throw error;
    }
  }

  async getCartProducts(id)
  {
    try {
      const response = await CartProducts.findAll({
        where : {
          cartId : id
        }
      })

      return response ;
      
    } catch (error) {
      
    }
  }

  async getCart(id) {
    try {
      const response = await Cart.findByPk(id);
      console.log(response, "what we get ");

      return response;
    } catch (error) {
      console.log(error, "CartRepository error");
      throw error;
    }
  }

  async createCart(userId) {
    try {
      const response = await Cart.create({ userId });
      // Log the response for debugging
      console.log("API Response:", response);
      return response;
    } catch (error) {
      console.log(error, "CartRepository error");
      throw error;
    }
  }

  async destroyCart(userId) {
    try {
      const response = await Cart.destroy({
        where: {
          id: userId,
        },
      });

      return response;
    } catch (error) {
      console.log("There is something error as", error);
      throw error;
    }
  }

  async updateCart(cartId, productId, shouldAddProduct = true) {
    try {
      const result = await CartProducts.findOne({
        where: {
          [Op.and]: [
            { cartId: cartId },
            {
              productId: productId,
            },
          ],
        },
      });

      if (shouldAddProduct) {
        // if we want to add the product
        if (!result) {
          // it means product is not present in the cart
          await CartProducts.create({
            cartId,
            productId,
          });
        } else {
          // product was in the cart, and we have to increment the items
          await result.increment({ quantity: 1 });
        }
      } else {
        // it means we wanna remove the product from cart
        if (!result) {
          throw new NotFoundError("cartProducts", "Product", productId);
        }
        if (result.quantity === 1) {
          await CartProducts.destroy({
            where: {
              [Op.and]: [
                { cartId: cartId },
                {
                  productId: productId,
                },
              ],
            },
          });
        } else {
          await result.increment({ quantity: -1 });
        }
      }
      const response = await CartProducts.findAll({
        where: {
          cartId: cartId,
        },
      });
      return {
        cartId : cartId,
        products : response
      }
    } catch (error) {
      console.log("cart_repo update cart func", error);
      throw error;
    }
  }
}

//  async getProduct()

module.exports = CartRepository;
