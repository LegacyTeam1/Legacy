var Announce = require("../database-mongodb/Announce");
var User = require("../database-mongodb/UserModel");
const { json } = require("body-parser");

// var Image = require ('../database-mongodb/Announce')
const upload = require("../database-mongodb/utils/multer");
// const cloudinary = require ('../database-mongodb/utils/cloudinary')
// const path = require('path')

exports.createAnnounce = (req, res) => {
  Announce.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
exports.createUser = (req, res) => {
  User.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
