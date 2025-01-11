const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getLibraries,
  getLibrary,
  createLibrary,
} = require("../controllers/libraryController");

router.post("/post/:id", protect, createLibrary);

router.get("/getall", protect, getLibraries);
router.get("/get/:id", protect, getLibraries);

module.exports = router;
