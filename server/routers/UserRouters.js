const express = require("express");
const UserRouter = express.Router();
const asyncHandler = require("express-async-handler");
UserRouter.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { userName, email, password, avator, skills, abilities } = req.body;
    console.log("#DEBUG FETCH DATA");
    console.log(userName, email, password, avator, skills, abilities);
    res.status(200).send("woah!!");
  })
);

module.exports = UserRouter;
