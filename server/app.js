//import express
const express = require("express");

//create instance of it's class
const app = express();

//app should understand json so..
app.use(express.json());

//app must get confidential data drom config so get the cdotenc
const dotenv = require("dotenv");
const UserRouter = require("./routers/UserRouters");
dotenv.config();

//_______________MAIN_CODE_______________

//connect with DB
require("./config/connection_DB");


//getting APIs to use
app.use("/api/user", UserRouter);

const port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
