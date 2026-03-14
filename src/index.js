const express = require("express");

const { PORT } = require("./config/server_config");
const {router: apiRoutes} =  require("./routes/apiRoutes");
const app = express();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`server is running for shop cart app at ${PORT}`);
});
