const express = require("express");
const CommentRouter = express.Router();
const asyncHandler = require("express-async-handler");
const auth = require("../Middleware/Authenticate");
const Comment = require("../models/Comment");

//_____________________________________________________
//_________________POST A COMMENT______________________
CommentRouter.post(
  "/post",
  auth,
  asyncHandler(async (req, res) => {
    console.log(req.body);
    console.log("Post comment post function");
    console.log(req.user);
    const { universe, message } = req.body;
    const AddComment = new Comment({
      user: req.user._id,
      universe: universe,
      message: message,
    });
    const saveComment = await AddComment.save();
    res.status(200).send(saveComment);
  })
);

//_____________________________________________________
//______________GET COMMENT ON SPECIFIC UNIVERSE________
// NOTE: auth not being added here because user shall be allowed to see comments on universe without being authorized
CommentRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const universe = req.params.id;

    const Comments = await Comment.find({ universe: universe }).populate(
      "user",
      "-password"
    );
    console.log(Comments);
    res.status(200).send(Comments);
  })
);

module.exports = CommentRouter;
