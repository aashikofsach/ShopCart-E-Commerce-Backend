const User = require("../models/user");
// const axios = require("axios");

// async function getProduct() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   //   console.log(response);

//   return response;
// }

class UserRepository {
  async getUsers() {
    try {
      const response = await User.findAll();
      //   console.log(response);

      return response;
    } catch (error) {
      console.log(error, "Userrepository error");
      throw error;
    }
  }

  async getUser(id) {
    try {
      const response = await User.findByPk(id);
      console.log(response, "what we get ");

      return response;
    } catch (error) {
      console.log(error, "Userrepository error");
      throw error;
    }
  }

  async createUser(email, password) {
    try {
      const response = await User.create({ email, password });
      // Log the response for debugging
      console.log("API Response:", response);
      return response;
    } catch (error) {
      console.log(error, "Userrepository error");
      throw error;
    }
  }

  async destroyUser(userId) {
    try {
      const response = await User.destroy({
        where: {
          id: userId,
        },
      });

      return response;
    } catch (error) {
      console.log(error, "Userrepository error");
      throw error;
    }
  }

  async findUserByEmail(email)
  {
     try {
      const response = await User.findAll({
        where: {
          email : email
        },
      });

      console.log("here we are in repository ", response);

      return response;
    } catch (error) {
      console.log(error, "Userrepository error");
      throw error;
    }

  }
}

//  async getProduct()

module.exports = UserRepository;
