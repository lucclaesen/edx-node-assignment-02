const postsRoute = "/posts";
const postRoute = "/posts/:postId";

function addPost(app, store) {
  app.post(postsRoute, (req, resp) => {
    const {name, url, text} = req.body;
    const id = store.addPost(name, url, text);
    resp.status(201).send({id: id});
  });
}

function getPosts(app, store) {
  app.get(postsRoute, (req, resp) => {
    const res = store.getPosts();
    resp.status(200).send(res);
  });
}

function getPost(app, store) {
  app.get(postRoute, (req, resp) => {
    const postId = req.params.postId;
    const res = store.getPost(postId);
    resp.status(200).send(res);
  });
}

function deletePost(app, store) {
  app.delete(postRoute, (req, resp) => {
    const id = req.params.postId;
    store.deletePost(id);
    resp.sendStatus(204);
  });
}

module.exports = {
  configureAddPost: addPost,
  configureGetPosts: getPosts,
  configureGetPost: getPost,
  configureDeletePost: deletePost
}