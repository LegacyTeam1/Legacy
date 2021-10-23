const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
var expressJWT = require("express-jwt");

const path = require("path");
const ImageS = require("../database-mongodb/Image.js");
const upload = require("../database-mongodb/utils/multer");
const cloudinary = require("../database-mongodb/utils/cloudinary");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
const PORT = process.env.PORT || 3030;

var Router = require("./router");

app.use(express.static(__dirname + "../src"));

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
