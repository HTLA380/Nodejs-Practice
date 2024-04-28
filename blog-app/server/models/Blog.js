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
    description: {
      type: String,
      required: [true, "description is required"],
    },
    content: {
      type: String,
      required: [true, "content is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    createdBy: {
      type: String,
      required: [true, "Author id is required"],
    },
    imageUrl: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
