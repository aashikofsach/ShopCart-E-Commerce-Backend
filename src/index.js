const express = require('express');

const {PORT} = require("./config/serverConfig");
const app = express() ;


app.listen(3000, ()=> {
    console.log(`server is running for shop cart app at ${PORT}`)
})