const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema(
  {
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiveName: { type: String, required: [true, "Please add username"] },
    title: { type: String, required: [true, "Please add username"] },
  },
  {
    timestamps: true,
  }
);

const LibraryModel = mongoose.model("Library", LibrarySchema);
module.exports = LibraryModel;
