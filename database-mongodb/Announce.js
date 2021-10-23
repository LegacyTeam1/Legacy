const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const announceSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    price: { type: Number, required: true, unique: true },
    imageUrl: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

const Announce = mongoose.model("Announce", announceSchema);

module.exports = Announce;
