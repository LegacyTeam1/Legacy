var announceRouter = require('express').Router();
var Controller = require('./controllers')


announceRouter.route('/create')
               .post(Controller.createAnnounce)


module.exports = announceRouter ;