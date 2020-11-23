const Author = require("../../models/Author");

module.exports = {
  Query: {
    async getAuthors() {
      try {
        const authors = await Author.find();
        return authors;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getAuthor2(_, { author }) {
      try {
        const authors = await Author.find({ author });
        if (authors) {
          return authors;
        } else {
          throw new Error("Essay not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async getAuthor(_, { authorId }) {
      try {
        const author = await Author.findById(authorId);
        if (author) {
          return author;
        } else {
          throw new Error("Author not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
