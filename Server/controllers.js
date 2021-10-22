var Announce = require ('../database-mongodb/Announce')
const User = require('../database-mongodb/UserModel')
const { json } = require('body-parser');

// var Image = require ('../database-mongodb/Announce')
const upload = require('../database-mongodb/utils/multer')
// const cloudinary = require ('../database-mongodb/utils/cloudinary')
// const path = require('path')


exports.createAnnounce = (req,res)=>{
    console.log(req.body)
    Announce.create(req.body)
    .then((result)=>{
        res.status(201).send(result)
    })
    .catch(()=>{
        res.send("Not Created!")
    })
} 
