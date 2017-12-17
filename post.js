const guid = require("uuid/v4");

class Post {
  constructor(id, name, url, text) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.text = text;
    this.comments = {};
  }

  addComment(text) {
    const id = guid();
    this.comments[id] = { 
      id: id,
      text: text
    };
    return id;
  }

  getComments() {
    return this.comments;
  }

  getComment(id) {
    return this.comments[id];
  }

  updateComment(id, text) {
    if(this.comments.hasOwnProperty(id)) {
      this.comments[id].text = text;
    }
  }

  deleteComment(id) {
    if (this.comments.hasOwnProperty(id)) {
      delete this.comments[id];
    }
  }
}

module.exports = Post;