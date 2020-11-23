const { model, Schema } = require("mongoose");

const authorSchema = new Schema({
  author: String,
  Description_1: String,
  Description_2: String,
  image_address: String
});

module.exports = model("Author", authorSchema);
