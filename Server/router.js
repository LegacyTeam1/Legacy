var announceRouter = require("express").Router();
var Controller = require("./controllers");


announceRouter.get('/',Controller.restieve)
announceRouter.post('/create',Controller.createAnnounce)

announceRouter.get('/:id',Controller.restieve)
announceRouter.delete('/:id',Controller.deleteOne)
announceRouter.put('/:id',Controller.updateOne)



module.exports = announceRouter ;
