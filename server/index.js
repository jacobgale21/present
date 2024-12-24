const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://jacobgale2003:P07sm4KneboQyG65@present.nfdmq.mongodb.net/Users"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/users", require("./routes/userRoutes"));
app.use("/posts", require("./routes/postRoutes"));
app.listen(3001, () => console.log("Server started"));
