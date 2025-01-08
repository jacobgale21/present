const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const {
  postPost,
  getPosts,
  getUserPost,
} = require("../controllers/postController");

router.post("/:id", protect, postPost);
router.get("/getall", protect, getPosts);
router.get("/getposts", protect, getUserPost);
module.exports = router;
