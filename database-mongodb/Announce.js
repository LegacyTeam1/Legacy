const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const announceSchema = mongoose.Schema(
  {
    productInfo: String,
    username:{type:String,unique:true},
    user: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    price: { type: Number, required: true },
    imageUrl: String,
    category: String,
  },
  {
    timestamps: true,
  }
);



const Announce = mongoose.model("Announce", announceSchema);

module.exports = Announce;
