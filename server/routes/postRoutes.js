const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { postPost, getPosts } = require("../controllers/postController");

router.post("/", protect, postPost);
router.get("/getall", protect, getPosts);
module.exports = router;
