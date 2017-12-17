const commentsRoute = "/posts/:postId/comments";
const commentRoute = "/posts/:postId/comments/:commentId";

function getComments(app, store) {
  app.get(commentsRoute, (req, resp) => {
    const postId = req.params.postId;
    const comments = store.getPost(postId).getComments();
    resp.status(200).send(comments);
  });
}

function getComment(app, store) {
  app.get(commentRoute, (req, resp) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const comment = store.getPost(postId).getComment(commentId);
    resp.status(200).send(comment);
  });
}

function addComment(app, store) {
  app.post(commentsRoute, (req, resp) => {
    const {text} = req.body;
    const postId = req.params.postId;
    const commentId = store.getPost(postId).addComment(text);
    resp.status(201).send({id: commentId}); 
  });
}

function deleteComment(app, store) {
  app.delete(commentRoute, (req, resp) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    store.getPost(postId).deleteComment(commentId);
    resp.sendStatus(204);
  });
}


module.exports = {
  configureGetComments : getComments,
  configureGetComment : getComment,
  configureAddComment : addComment,
  configureDeleteComment : deleteComment
}