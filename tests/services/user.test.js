const { UserRepository, CartRepository } = require("../../src/repositories/");
const UserService = require("../../src/services/user_service");
jest.mock("../../src/repositories/user_repository")
jest.mock("../../src/repositories/cart_repository")

const mockUser = {
  id: 1,
  email: "A@b.com",
  password: "ffbskfj",
  createdAt: "2025-12-12",
  updatedAt: "2025-12-12",
};

describe("Test for userService Sign in method", () => {
  beforeAll(() => {
    UserRepository.mockImplementation(() => {
      return {
        findUserByEmail: (email) => {
          return mockUser;
        },
      };
    });
  });

  test("should return valid jwt toke", ()=>{
    //prepare
    const userService = new UserService(new UserRepository() , new CartRepository());


    //Act
    const response = userService.signInUser({email : "A@b.com", password :"12345"})
  })
});
