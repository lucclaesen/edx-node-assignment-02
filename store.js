const guid = require("uuid/v4");
const Post = require("./post");

class Store {
  constructor(posts = {}) {
    this.posts = posts;
  }

  getPosts() {
    return this.posts;
  }

  addPost(name, url, text) {
    const id = guid();
    this.posts[id] = new Post(id, name, url, text);
    return id;
  }

  getPost(id) {
    return this.posts[id];
  }

  deletePost(id) {
    delete this.posts[id];
  }

}

module.exports = Store