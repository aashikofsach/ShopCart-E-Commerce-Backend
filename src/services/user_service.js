// const products = [];

const { badRequestError } = require("../errors/bad_request_error");
const { ConflictError } = require("../errors/conflict_error");
const { internalServerError } = require("../errors/internal_server_error");
const { NotFoundError } = require("../errors/not_found_error");

class UserService {
  constructor(respository) {
    this.respository = respository;
  }

  async createUser(user) {
    try {
      const response = await this.respository.createUser(
        user.email,
        user.password,
      );

      return response;
    } catch (error) {
      console.log("user service error array :", error.errors[0].message);
      console.log("user service :", error.name);
      if (error.name === "SequelizeUniqueConstraintError")
        throw new ConflictError("User", error.errors[0].message);
      if (error.name === "SequelizeValidationError") {
        let propertiesHavingValidationIssue = "";
        let reason = [];
        error.errors.forEach((err) => {
          propertiesHavingValidationIssue += err.path + ", ";
          reason.push(err.message);
        });
        throw new badRequestError(propertiesHavingValidationIssue ,true , reason) ;
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
}

module.exports = UserService;
