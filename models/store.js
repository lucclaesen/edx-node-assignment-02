const guid = require("uuid/v4");
const Post = require("./post");

/**
 * A hash table store for posts. For a quick and continous lookup,
 * blog posts are stored as 
 */
class Store {

  /**
   * Initializes a new instance of the Store class.
   * @param {*} posts : the store to use, if any. If not provided, a blank store
   *                    will be created.
   */
  constructor(posts = {}) {
    this.posts = posts;
  }

  /**
   * Gets the posts in the store.
   */
  getPosts() {
    return this.posts;
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
    this.posts[id] = new Post(name, url, text);
    return id;
  }

  /**
   * Gets the post with the given id
   * @param {*} id 
   * @returns   The post with the given id.
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