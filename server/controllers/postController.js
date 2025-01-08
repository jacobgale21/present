const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Post = require("../models/postSchema");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ sender: req.user.id });
  res.status(200).json(posts);
});

const postPost = asyncHandler(async (req, res) => {
  try {
    const receiveUser = await User.findById(req.params.id);
    const newPost = await Post.create({
      imageURL: req.body.imageURL,
      caption: req.body.caption,
      date: req.body.date,
      sender: req.user.id,
      receiver: req.params.id,
      receiveName: receiveUser.username,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const getUserPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({ receiver: req.user.id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const getDatePost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({ date: req.body.date });
    res.status(200).json(posts);
  } catch (err) {
    console.log(posts);
  }
});
const getPost = (module.exports = {
  postPost,
  getPosts,
  getUserPost,
  getDatePost,
});
