const { model, Schema } = require("mongoose");

const essaySchema = new Schema({
  author: String,
  title: String,
  topic: String,
  year: String,
  link: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String
    }
  ],
  likes: [
    {
      username: String,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = model("Essay", essaySchema);
