// const products = [];

const bcrypt = require("bcryptjs");

const { badRequestError } = require("../errors/bad_request_error");
const { ConflictError } = require("../errors/conflict_error");
const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");
const { unauthorizedError } = require("../errors/unauthorized_error");
const {  generateJWT } = require("../utils/auth");

class UserService {
  constructor(respository , cartRepository) {
    this.respository = respository;
    this.cartRepository = cartRepository ;
  }

  async createUser(user) {
    try {
      const response = await this.respository.createUser(
        user.email,
        user.password,
      );

      console.log("line numer 25 ", response.id)
      await this.cartRepository.createCart(response.id)

      return response;
    } catch (error) {
      console.log("user service error array taaza :", error.errors[0].message);
      console.log("user service taaza :", error.name);
      if (error.name === "SequelizeUniqueConstraintError")
        throw new ConflictError("User", error.errors[0].message);
      if (error.name === "SequelizeValidationError") {
        let propertiesHavingValidationIssue = "";
        let reason = [];
        error.errors.forEach((err) => {
          propertiesHavingValidationIssue += err.path + ", ";
          reason.push(err.message);
        });
        throw new badRequestError(
          propertiesHavingValidationIssue,
          true,
          reason,
        );
      }
      //
      throw new internalServerError();
    }
  }

  async getUsers() {
    try {
      const response = await this.respository.getUsers();
      return response;
    } catch (error) {
      console.log("user service :", error);
      throw new internalServerError();
    }
  }

  async getUser(userId) {
    try {
      const response = await this.respository.getUser(userId);
      if (!response) throw new NotFoundError("User", "id", userId);
      return response;
    } catch (error) {
      if (error.name === "NotFoundError") throw error;
      console.log("user service :", error);
      throw new internalServerError();
    }
  }

  async destroyCategory(userId) {
    try {
      const response = await this.respository.destroyCategory(userId);
      if (!response) throw new NotFoundError("user", "id", userId);
      return response;
    } catch (error) {
      if (error.name === "NotFoundError") throw error;
      console.log("user service :", error);

      throw new internalServerError();
    }
  }

  async signInUser(user) {
    try {
      const response = await this.respository.findUserByEmail(user.email);
      console.log(response, "jai baaba ki")
      console.log(response[0]?.password, "here we are getting the user from db by entering email");
      if (!response) throw new NotFoundError("user", "email", user.email);
      const isLogin = await bcrypt.compare(user.password, response[0]?.password);
      if (!isLogin) throw new unauthorizedError();

      return generateJWT({ email: response[0]?.email, id: response[0]?.id });
    } catch (error) {
      if (error.name === "NotFoundError" || error.name === "unauthorizedError") throw error;
      console.log("user service yaha :", error);

      throw new internalServerError();
    }
  }
}

module.exports = UserService;
