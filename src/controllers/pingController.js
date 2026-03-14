function pingController(req, res) {
  return res.json({
    message: "PONG from V1 Router",
  });
}

function pingControllerV2(req, res)
{
    return res.json({
        message : "PONG from v2 Router"
    })
}

function productController(req, res)
{
    return res.json({
        data : "productArray"
    })
}

module.exports = {
  pingController,
  pingControllerV2,productController
};
