const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/pokemon';

mongoose.connect(mongoUri,{ 
  useNewUrlParser: true ,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex : true
}, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
