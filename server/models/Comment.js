const mongoose = require("mongoose");

const CommentModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  universe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Universe",
  },
  message: {
    type: String,
  },
});

const Comment = mongoose.model("Comment", CommentModel);

module.exports = Comment;
