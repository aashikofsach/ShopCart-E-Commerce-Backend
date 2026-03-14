const express = require("express");

const { PORT } = require("./config/serverConfig");
const { router : pingRouter} = require("./routers/pingRouter");
const app = express();

app.use("/api/v1/ping", pingRouter);

app.listen(PORT, () => {
  console.log(`server is running for shop cart app at ${PORT}`);
});
