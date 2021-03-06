const mongoose = require("mongoose");
require("dotenv").config();
const db = main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("db works")
  );
}
module.exports = db;
