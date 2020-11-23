const { UserInputError } = require("apollo-server");
const Essay = require("../../models/Essay");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getEssays() {
      try {
        const essays = await Essay.find();
        return essays;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getEssay(_, { essayId }) {
      try {
        const essay = await Essay.findById(essayId);
        if (essay) {
          return essay;
        } else {
          throw new Error("Essay not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async getEssay2(_, { author }) {
      try {
        const essay = await Essay.find({ author });
        if (essay) {
          return essay;
        } else {
          throw new Error("Essay not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async likeEssay(_, { essayId }, context) {
      const { username } = checkAuth(context);

      const essay = await Essay.findById(essayId);
      if (essay) {
        if (essay.likes.find(like => like.username === username)) {
          // essay already likes, unlike it
          essay.likes = essay.likes.filter(like => like.username !== username);
        } else {
          // Not liked, like essay
          essay.likes.push({
            username,
            createdAt: new Date().toISOString()
          });
        }

        await essay.save();

        return essay;
      } else throw new UserInputError("Essay not found");
    }
  }
};
