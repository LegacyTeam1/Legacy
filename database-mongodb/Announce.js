const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const announceSchema = new mongoose.Schema({
  username : String,
  adress : {type :String , require : true},
  phoneNumber : {type :Number , require : true},
  price : {type :Number , require : true},
  imageUrl : String,
  category : string,
}, 
  {
    timestamps: true
  }
);

const Announce = mongoose.model('Announce',announceSchema);
module.exports = Announce;
