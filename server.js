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

routes.posts.configureGetPosts(app, store);
routes.posts.configureAddPost(app, store);
routes.posts.configureGetPost(app, store);
routes.posts.configureDeletePost(app, store);

routes.comments.configureGetComments(app, store);
routes.comments.configureGetComment(app, store);
routes.comments.configureAddComment(app, store);
routes.comments.configureDeleteComment(app, store);

app.listen(3000);
console.log("Server is listening on port 3000");