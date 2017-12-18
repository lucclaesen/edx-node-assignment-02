/**
 * Represents a blog post comment.
 */
class Comment {

  /**
   * Initializes a blog post comment
   * @param {*} text  The text of the new comment.
   */
  constructor(text) {
    this.text = text;
  }

  /**
   * Updates the text of this comment.
   * @param {*} text 
   */
  update(updated) {
    if (updated.hasOwnProperty("text")) {
      this.text = updated.text;
    }
  }
}

module.exports = Comment;