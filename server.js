const express = require("express");
const bodyParser = require("body-parser");
const logging = require("morgan");
const errorHandler = require("errorhandler");
const routes = require("./routes");
const Store = require("./store");

const app = express();
app.use(bodyParser.json());
app.use(logging("dev"));
app.use(errorHandler());

const store = new Store(); 
routes.posts.configureWith(app, store);
routes.comments.configureWith(app, store);
app.listen(3000);
console.log("Server is listening on port 3000");