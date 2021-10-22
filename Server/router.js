var announceRouter = require("express").Router();
var Controller = require("./controllers");



announceRouter.post('/create',Controller.createAnnounce)


module.exports = announceRouter ;
