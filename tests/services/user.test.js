const { UserRepository, CartRepository } = require("../../src/repositories/");
const UserService = require("../../src/services/user_service");
const authUtils = require('../../src/utils/auth');
const bcrypt = require("bcryptjs");
jest.mock("../../src/repositories/user_repository");
jest.mock("../../src/repositories/cart_repository");
jest.mock("../../src/utils/auth");


const mockUser = {
  id: 1,
  email: "A@b.com",
  password: "12345",
  createdAt: "2025-12-12",
  updatedAt: "2025-12-12",
};

describe("Test for userService Sign in method", () => {
  beforeAll(() => {
    UserRepository.mockImplementation(() => {
      return {
        findUserByEmail: (email) => {
          return [mockUser];
        },
        getUsers: () => {
          return [mockUser];
        },
        getUser: () => {
          return mockUser;
        },
      };
    });

    authUtils.generateJWT.mockImplementation(()=> 'token')
  });



  test("should return valid jwt toke", async () => {
    //prepare
    const userService = new UserService(
      new UserRepository(),
      new CartRepository(),
    );
    // in signInUser method of userService, firstly we check if the user is present and then we compare the password
    //with bcrypt, and for that we have to make the mock of bcrypt( as it present in just next file call so we have to make mock of it )
    jest.spyOn(bcrypt, "compare").mockImplementation(() => true);

    //Act
    const response = await userService.signInUser({
      email: "A@b.com",
      password: "12345",
    });

    expect(response).toBe('token');
  });
});
