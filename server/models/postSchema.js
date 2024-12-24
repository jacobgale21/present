const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    imageURL: { type: String, required: true },
    caption: { type: String, required: false },
    date: { type: Date, required: [true, "Please add date"] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    username: { type: String, required: [true, "Please add username"] },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Post", PostSchema);
module.exports = PostModel;
