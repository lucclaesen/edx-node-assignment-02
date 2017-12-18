const createIdentifiableResource = require("./utils");

const commentsRoute = "/posts/:postId/comments";
const commentRoute = "/posts/:postId/comments/:commentId";

/**
 * Configures the routes for CRUD operations on blog posts.
 * @param {*} app   The express app. 
 * @param {*} store The store of blog posts
 */
function configureWith(app, store) {
  
  /**
   * Creates a route for GET /posts/:postId/comments/:commentId
   */
  app.get(commentsRoute, (req, resp) => {
    const postId = req.params.postId;
    const comments = store.getPost(postId).getComments();
    const commentsResources = Object.keys(comments)
      .map((key) => createIdentifiableResource(key, comments[key]));
    resp.status(200).send(commentsResources);
  });

  /**
   * Creates a route for GET /posts/:postId/comments
   */
  app.get(commentRoute, (req, resp) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const comment = store.getPost(postId).getComment(commentId);
    resp.status(200).send(createIdentifiableResource(commentId, comment));
  });

  /**
   * Creates a route for POST /posts/:postId/comments
   */
  app.post(commentsRoute, (req, resp) => {
    const {text} = req.body;
    const postId = req.params.postId;
    const commentId = store.getPost(postId).addComment(text);
    resp.status(201).send({id: commentId}); 
  });

  /**
   * Creates a route for /posts/:postId/comments/:commentId
   */
  app.put(commentRoute, (req, resp) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const comment = store
      .getPost(postId)
      .getComment(commentId);
    comment.update(req.body);
    resp.status(200).send(comment);
  });

  /**
   * Creates a route for DELETE /posts/:postId/comments/:commentId
   */
  app.delete(commentRoute, (req, resp) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    store.getPost(postId).deleteComment(commentId);
    resp.sendStatus(204);
  });
}

module.exports = {
  configureWith: configureWith
}