const mongoose = require("mongoose");
require("dotenv").config();

const Uri = process.env.ATLAS_URI;
mongoose.connect(
  Uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);
const db = mongoose.connection;

module.exports = db;
