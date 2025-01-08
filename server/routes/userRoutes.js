const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  follow,
  getFollowers,
  getFollowing,
  getNonFollowers,
  getUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.patch("/follow/:id", protect, follow);

router.get("/getfollowers", protect, getFollowers);
router.get("/getfollowing", protect, getFollowing);
router.get("/getnonfollowing", protect, getNonFollowers);
router.get("/getuser", protect, getUser);
module.exports = router;
