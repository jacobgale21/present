const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Post = require("../models/postSchema");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.status(200).json(posts);
});

const postPost = asyncHandler(async (req, res) => {
  try {
    const newPost = await Post.create({
      imageURL: req.body.imageURL,
      caption: req.body.caption,
      date: req.body.date,
      user: req.user.id,
      username: req.user.username,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  postPost,
  getPosts,
};
