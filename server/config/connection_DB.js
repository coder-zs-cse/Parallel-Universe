const mongoose = require("mongoose");

const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser:true,
  
    useUnifiedTopology:true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log("Unable to connect due to: " + e);
  });
