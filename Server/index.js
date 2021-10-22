const express = require("express");

const Announce = require("../database-mongodb/Announce.js");
const User = require("../database-mongodb/UserModel.js");
const app = express();
const PORT = 5050;

var announceRouter = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "../src"));

app.use("/", announceRouter);

const ImageS = require("../database-mongodb/Image.js");
const upload = require("../database-mongodb/utils/multer");
const cloudinary = require("../database-mongodb/utils/cloudinary");
const path = require("path");

app.post("/signup", announceRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
