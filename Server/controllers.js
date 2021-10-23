var Announce = require("../database-mongodb/Announce");
var User = require("../database-mongodb/UserModel");
const { json } = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// var Image = require ('../database-mongodb/Announce')
const upload = require("../database-mongodb/utils/multer");
// const cloudinary = require ('../database-mongodb/utils/cloudinary')
// const path = require('path')

exports.createAnnounce = (req, res) => {
  Announce.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
exports.restieve = (req, res) => {
  Announce.find({})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send("can Not retrieve!");
    });
};

exports.restieveOne = (req, res) => {
  Announce.findOne({ _id: req.params.id })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send("can Not retrieve!");
    });
};

exports.deleteOne = (req, res) => {
  Announce.findOneAndRemove({ _id: req.params.id })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send("can Not delete One!");
    });
};

exports.updateOne = (req, res) => {
  Announce.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(201).send("Not updated!");
    });
};

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    console.log(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
};
