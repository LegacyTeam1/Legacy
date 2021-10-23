var Router = require("express").Router();
var Controller = require("./controllers");

Router.route("/create").post(Controller.createAnnounce);
Router.route("/signup").post(Controller.createUser);
Router.route("/signin").post(Controller.loginUser);

module.exports = Router;
