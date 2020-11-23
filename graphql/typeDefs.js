const { gql } = require("apollo-server");

//delete commenet isn't working yet. I keep getting "deleteComment": null

module.exports = gql`
  type Essay {
    id: ID!
    author: String
    title: String
    topic: String
    year: String
    link: String
    createdAt: String
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type Author {
    id: ID!
    author: String
    Description_1: String
    Description_2: String
    image_address: String
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getEssays: [Essay]
    getEssay(essayId: ID!): Essay
    getEssay2(author: String!): [Essay]
    getAuthors: [Author]
    getAuthor(authorId: ID!): Author
    getAuthor2(author: String!): [Author]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createComment(essayId: String!, body: String): Essay!
    deleteComment(essayId: ID!, commentId: ID!): Essay!
    likeEssay(essayId: ID!): Essay!
  }

  type Subscription {
    newEssay: Essay!
  }
`;
