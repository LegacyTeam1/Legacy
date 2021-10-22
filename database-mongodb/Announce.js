const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : {type :String , require : true, unique:true},
  address : {type :String , require : true, unique:true},
  phoneNumber : {type :Number , require : true, unique:true},
  price : {type :Number , require : true, unique:true},
  imageUrl : String,
  category : String,
}, 
  {
    timestamps: true
  }
);

const Announce = mongoose.model('Announce',announceSchema);
module.exports = Announce;
