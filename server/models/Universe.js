const mongoose = require("mongoose");

const UniverseModel = new mongoose.Schema({
  name: {
    type: String,
  },
  images: [
    {
      link: {
        type: String,
      },
      alt: {
        type: String,
      },
    },
  ],

  description: { type: String, required: true },
  features: [{ type: String, required: true }],
  characteristics: [{ type: String, required: true }],

});

const Universe = mongoose.model("Universe", UniverseModel);

module.exports = Universe;
