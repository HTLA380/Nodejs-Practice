const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  author: {
    type: String,
    required: [true, "author is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  genre: {
    type: String,
    required: [true, "genre is required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
