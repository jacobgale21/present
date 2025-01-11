const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Post = require("../models/postSchema");
const Library = require("../models/librarySchema");

const createLibrary = asyncHandler(async (req, res) => {
  try {
    const receiveUser = await User.findById(req.params.id);
    const newLibrary = await Library.create({
      sender: req.user.id,
      receiver: req.params.id,
      receiveName: receiveUser.username,
      title: req.body.title,
    });
    res.status(200).json(newLibrary);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
const getLibraries = asyncHandler(async (req, res) => {
  try {
    const libraries = await Library.find({
      $and: [{ sender: req.user.id }, { receiver: req.params.id }],
    });
    res.status(200).json(libraries);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
const getLibrary = asyncHandler(async (req, res) => {
  try {
    const library = await Library.findById(req.params.id);
    res.status(200).json(library);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  getLibraries,
  getLibrary,
  createLibrary,
};
