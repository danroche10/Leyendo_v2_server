const essaysResolvers = require("./essays");
const authorsResolvers = require("./authors");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Essay: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length
  },
  Query: {
    ...essaysResolvers.Query,
    ...authorsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...essaysResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
  // This is only for automatic update of like & commments. Haven't confirmed that it's working yet...
  Subscription: {
    ...essaysResolvers.Subscription
  }
};
