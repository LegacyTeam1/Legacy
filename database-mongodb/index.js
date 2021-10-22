const mongoose = require("mongoose");
const Uri = process.env.URI;
mongoose.connect(
  Uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("db connected");
  }
);
const db = mongoose.connection;

module.exports = db;
