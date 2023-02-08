const express = require("express");
const UserRouter = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
//____________________________________________________________
//__________________SIGN UP__________________________________
UserRouter.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { userName, email, password, avator, skills, abilities } = req.body;

    //No same use shall exists, this can be found using the email
    const findEmail = await User.findOne({ email: email });
    if (findEmail) {
      return res.status(400).send("User exists");
    }

    //create the user as he's new
    const createUser = new User(req.body);
    const saveUser = await createUser.save();

    //generate token for authentication
    const token = await saveUser.GenerateToken(saveUser._id);

    //send apprpriate response
    res.status(200).send({
      _id: createUser._id,
      userName: userName,
      email: email,
      skills: skills,
      abilities: abilities,
      token: token,
    });
  })
);

//____________________________________________________________
//__________________LOGIN__________________________________
UserRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //No same use shall exists, this can be found using the email
    const findEmail = await User.findOne({ email: email });
    if (!findEmail) {
      return res.status(400).send("Invalid Cridentials");
    }

    const password_macthed = await findEmail.MatchPassword(password);

    if (!password_macthed) {
      res.status(400).send("Invalid Cridentials");
    } else {
      //generate token for authentication
      const token = await findEmail.GenerateToken(findEmail._id);

      res.status(200).send({
        _id: findEmail._id,
        userName: findEmail.userName,
        email: findEmail.email,
        skills: findEmail.skills,
        abilities: findEmail.abilities,
        token: token,
      });
    }
  })
);

module.exports = UserRouter;
