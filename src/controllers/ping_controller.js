function pingCheck(req, res) {
  return res.json({
    message: "PONG from V1 Router",
  });
}

function pingCheckV2(req, res) {
  return res.json({
    message: "PONG from v2 Router",
  });
}

// function productController(req, res)
// {
//     return res.json({
//         data : "productArray"
//     })
// }

module.exports = {
  pingCheck,
  pingCheckV2,
};
