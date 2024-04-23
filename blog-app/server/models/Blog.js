const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title is required"],
      trim: true,
      minlength: [4, "Title is too short"],
      maxlength: [150, "Title is too long"],
    },
    author: {
      type: String,
      require: [true, "author name is required"],
      trim: true,
      minlength: [4, "author name is too short"],
      maxlength: [20, "author name is too long"],
    },
    content: {
      type: String,
      require: [true, "content is required"],
    },
    category: {
      type: String,
      require: [true, "category is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
