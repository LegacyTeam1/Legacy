
var Router = require("express").Router();
var Controller = require("./controllers");

Router.route("/create").post(Controller.createAnnounce);
Router.route("/signup").post(Controller.createUser);
Router.route("/signin").post(Controller.loginUser);

Router.get('/',Controller.restieve)
Router.post('/create',Controller.createAnnounce)

Router.get('/:id',Controller.restieve)
Router.delete('/:id',Controller.deleteOne)
Router.put('/:id',Controller.updateOne)




module.exports = Router;
