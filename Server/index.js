const express = require("express");
const path = require("path");
const ImageS = require("../database-mongodb/Image.js");
const upload = require("../database-mongodb/utils/multer");
const cloudinary = require("../database-mongodb/utils/cloudinary");

const app = express();
const PORT = 5050;

var announceRouter = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "../src"));

app.use("/", announceRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
