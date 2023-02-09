const bcryptjs = require("bcryptjs"); // => For hashing
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken"); // => For token

const UserModel = new mongoose.Schema({
  // => Your attributes will come here
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avator: {
    skin: {
      type: String,
    },
    top: {
      type: String,
    },
    haircolor: {
      type: String,
    },
    clothingcolor: {
      type: String,
    },
  },

});

// => Define a pre=save function => Function to be called before svaing into database
UserModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  try {
    console.log("DEBUG : HASHING PASSWORD");
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    console.log("DEBUG : HASHED PASSWORD: " + this.password);
    next();
  } catch (e) {
    console.log("Hashing failed due to : " + e);
  }
});

// => Defining the method to be invoked on instances created of this entity type
//________________________________________________________________________________
// 1) => To match the password
UserModel.methods.MatchPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

//________________________________________________________________________________
// 2) => To generate token for authorization
UserModel.methods.GenerateToken = async function (userid) {
  console.log("#DEBUG: REQUEST FOR TOKEN FOR ID: " + userid);
  const token = jwt.sign({ userid }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  console.log("#DEBIG: TOKEN IS: " + token);
  return token;
};

const User = mongoose.model("User", UserModel);

module.exports = User;
