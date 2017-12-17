const guid = require("uuid/v4");
const Comment = require("./comment");

/**
 * Represents a blog post.
 */
class Post {
  
  /**
   * Initializes a Post instance.
   * @param {*} id 
   * @param {*} name 
   * @param {*} url 
   * @param {*} text 
   */
  constructor(id, name, url, text) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.text = text;
    this.comments = {};
  }

  /**
   * Creates a new comment on this post.
   * @param {*} text 
   * @returns   The id of the newly created comment.
   */
  addComment(text) {
    const id = guid();
    this.comments[id] = new Comment(id, text);
    return id;
  }

  /**
   * Gets the comments on this post.
   */
  getComments() {
    return Object.keys(this.comments)
      .map(key => this.comments[key]);
  }

  /**
   * Gets the comment with the given id.
   * @param {*} id 
   */
  getComment(id) {
    return this.comments[id];
  }

    /**
   * Updates the name, url and text of this post.
   * @param {*} updated The updated Post with name, url and text properties
   */
  update(updated) {
    ["name", "url", "text"].forEach(prop => {
      if (updated.hasOwnProperty(name)) {
        this[prop] = updated[prop];
      }  
    });
  }

  /**
   * Deletes the comment with the given id.
   * @param {*} id 
   */
  deleteComment(id) {
    if (this.comments.hasOwnProperty(id)) {
      delete this.comments[id];
    }
  }
}

module.exports = Post;