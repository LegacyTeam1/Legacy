var Router = require("express").Router();
var Controller = require("./controllers");

Router.route("/signup").post(Controller.createUser);
Router.route("/signin").post(Controller.loginUser);

Router.get(":category/:id", Controller.retrieveOne);
Router.get("/category/:category", Controller.restieve);
Router.get("/recherche/:id", Controller.search);
Router.post("/create", Controller.createAnnounce);


Router.get('/category/:category',Controller.restieve)
Router.get('/recherche/:id',Controller.search)
Router.post('/create',Controller.createAnnounce)
Router.get('/UserAnnounces/:user',Controller.announceUser)



Router.get('/:id',Controller.restieveOne)
Router.delete('/:id',Controller.deleteOne)
Router.put('/:id',Controller.updateOne)




module.exports = Router;
