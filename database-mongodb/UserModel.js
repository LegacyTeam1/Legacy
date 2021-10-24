const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("User", userSchema);
