const guid = require("uuid/v4");
const Post = require("./post");

/**
 * A hash table store for posts. Every post is stored as a
 * value for it's id property.
 */
class Store {

  /**
   * Initializes a new instance of the Store class.
   * @param {*} posts : the store, if any
   */
  constructor(posts = {}) {
    this.posts = posts;
  }

  /**
   * Gets the posts in the store.
   */
  getPosts() {
    return Object.keys(this.posts)
      .map(key => this.posts[key]);
  }

  /**
   * Creates a new post and adds it to the store.
   * @param {*} name 
   * @param {*} url 
   * @param {*} text 
   * @returns The id of the newly created post.
   */
  addPost(name, url, text) {
    const id = guid();
    this.posts[id] = new Post(id, name, url, text);
    return id;
  }

  /**
   * Gets the post with the given id
   * @param {*} id 
   * @returns The post with the given id.
   */
  getPost(id) {
    return this.posts[id];
  }

  /**
   * Removes the post with the given id from the store.
   * @param {*} id 
   */
  deletePost(id) {
    delete this.posts[id];
  }

}

module.exports = Store