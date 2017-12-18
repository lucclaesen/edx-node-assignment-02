const createIdentifiableResource = require("./utils");

const postsRoute = "/posts";
const postRoute = "/posts/:postId";

/**
 * Configures the routes for CRUD operations on blog post comments.
 * @param {*} app   The express app
 * @param {*} store The store with blog posts and their comments.
 */
function configureWith(app, store) {

  /**
   * Creates a route for POST /posts
   */
  app.post(postsRoute, (req, resp) => {
    const {name, url, text} = req.body;
    const id = store.addPost(name, url, text);
    resp.status(201).send({id: id});
  });

  /**
   * Creates a route for GET /posts/:postId
   */
  app.get(postsRoute, (req, resp) => {
    const posts = store.getPosts();
    const postResources = Object.keys(posts)
      .map(key => createIdentifiableResource(key, posts[key]));
    resp.status(200).send(postResources);
  });

  /**
   * Creates a route for GET /posts/:postId
   */
  app.get(postRoute, (req, resp) => {
    const postId = req.params.postId;
    const res = store.getPost(postId);
    resp.status(200).send(createIdentifiableResource(postId, res));
  });

  /**
   * Creates a route for PUT /posts/:postId
   */
  app.put(postRoute, (req, resp) => {
    const postId = req.params.postId;
    const post = store.getPost(postId);
    post.update(req.body);
    resp.status(200).send(post); 
  })

  /**
   * Creates a route for DELETE /posts/:postId
   */
  app.delete(postRoute, (req, resp) => {
    const id = req.params.postId;
    store.deletePost(id);
    resp.sendStatus(204);
  });
}

module.exports = {
  configureWith : configureWith
}