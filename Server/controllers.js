var Announce = require("../database-mongodb/Announce");
const User = require("../database-mongodb/UserModel");
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

exports.restieve= (req,res)=>{
    Announce.find({})
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch(()=>{
        res.status(403).send("can Not retrieve!")
    })
}

exports.restieveOne= (req,res)=>{
    Announce.findOne({_id: req.params.id})
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch(()=>{
        res.status(403).send("can Not retrieve!")
    })
}

exports.deleteOne= (req,res)=>{
    Announce.findOneAndRemove({_id: req.params.id})
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch(()=>{
        res.status(403).send("can Not delete One!")
    })
}

exports.updateOne= (req,res)=>{
    Announce.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch(()=>{
        res.status(201).send("Not updated!")
    })
}