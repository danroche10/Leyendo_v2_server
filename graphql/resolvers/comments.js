const { AuthenticationError, UserInputError } = require("apollo-server");
const checkAuth = require("../../util/check-auth");
const Essay = require("../../models/Essay");

module.exports = {
  Mutation: {
    createComment: async (_, { essayId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not empty"
          }
        });
      }

      const essay = await Essay.findById(essayId);

      if (essay) {
        essay.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        });
        await essay.save();
        return essay;
      } else throw new UserInputError("Post not found");
    },
    //delete commenet isn't working yet. I keep getting "deleteComment": null

    async deleteComment(_, { essayId, commentId }, context) {
      const { username } = checkAuth(context);

      const essay = await Essay.findById(essayId);

      if (essay) {
        const commentIndex = essay.comments.findIndex(c => c.id === commentId);
        console.log(commentIndex);
        if (essay.comments[commentIndex].username === username) {
          essay.comments.splice(commentIndex, 1);
          await essay.save();
          return essay;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    }
  }
};
