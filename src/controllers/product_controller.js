function createProduct(req, res) {
  try {
    // here we do db interaction
    console.log(req.body)

    return res.json({
      sucess: true,
      error: null,
      message: "Successful created the product ",
      data: {
        id: Math.random() * 20,
        title: "",
        description: "",
        category: "",
        price: 0,
        image: "",
      },
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

module.exports = {
  createProduct,
};
