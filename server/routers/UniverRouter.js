const express = require("express");
const UniverseRouter = express.Router();
const asyncHandler = require("express-async-handler");
const auth = require("../Middleware/Authenticate");
const Universe = require("../models/Universe");
//____________________________________________________________
//________________GET ALL UNIVERSES__________________________
UniverseRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const AllUniverses = await Universe.find();
      res.status(200).send(AllUniverses);
    } catch (e) {
      res.status(400).send("Unable to fetch universes");
    }
  })
);
//____________________________________________________________
//________________GET [secific] UNIVERSE__________________________
UniverseRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const _id = req.params.id;
      const findUniverse = await Universe.findById({ _id: _id });
      if (!findUniverse) {
        throw new Error("Blog Not Found");
      }

      res.status(200).send(findUniverse);
    } catch (e) {
      throw new Error("Blog Not Found");
    }
  })
);
//____________________________________________________________
//________________POST UNIVERSE__________________________
UniverseRouter.post(
  "/post",
  asyncHandler(async (req, res) => {
    try {
      const PostBlog = new Universe(req.body);
      const SaveBlog = await PostBlog.save();
      res.status(200).send(SaveBlog);
    } catch (e) {
      res.status(400).send("Unable to post blog");
    }
  })
);
//____________________________________________________________
//________________DELETE UNIVERSE__________________________
UniverseRouter.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    try {
      const _id = req.params.id;
      const findUniverse = await Universe.findById({ _id: _id });
      if (!findUniverse) {
        throw new Error("Blog Not Found");
      }
      await Universe.findByIdAndDelete({ _id: _id });
      res.status(200).send("Blog deleted");
    } catch (e) {
      throw new Error("Blog Not Found");
    }
  })
);
module.exports = UniverseRouter;
