var Announce = require("../database-mongodb/Announce");
const User = require("../database-mongodb/UserModel");
const { json } = require("body-parser");

// var Image = require ('../database-mongodb/Announce')
const upload = require("../database-mongodb/utils/multer");
// const cloudinary = require ('../database-mongodb/utils/cloudinary')
// const path = require('path')

exports.createAnnounce = (req, res) => {
    const anounce = new Announce({
    username: req.body.username,
    adress: req.body.adress,
    phoneNumber: req.body.phoneNumber,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    category: req.body.catgory,
  });
  anounce
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
