const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : String,
  title: {type :String , require : true},
  street : {type :String , require : true},
  city : {type :String , require : true},
  phoneNumber : {type :Number , require : true},
  price : {type :Number , require : true},
  imageUrl : String,
  owner : String,
}, 
  {
    timestamps: true
  }
);

const Announce = mongoose.model('Announce',announceSchema);
module.exports = Announce;
