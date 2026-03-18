
const FakeStoreRepository = require("../repositories/fake_store_repository")

const respository = FakeStoreRepository ;

const products = [];

function createProductService(product) {
  const newProduct = {
    id: products.length,
    ...product,
  };

  products.push(newProduct);

  return newProduct;
}

async function getProductsServices()
{
  const response = await respository.getProduct();
  return response.data;

}

function getProductService(id)
{
    console.log(id, "line is 20 here ")
    console.log(products.filter((product)=> product.id==id)[0], "line is 21 ")

    const requestedProduct = products.filter((product)=> product.id==id)[0];
    return requestedProduct;
}

module.exports ={
    createProductService,
    getProductsServices,
    getProductService
}
