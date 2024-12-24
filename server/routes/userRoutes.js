const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { registerUser, loginUser } = require("../controllers/userController");
router.post("/", registerUser);
router.post("/login", loginUser);
module.exports = router;
