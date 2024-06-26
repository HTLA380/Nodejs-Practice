const mongoose = require("mongoose");
const Task = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", Task);
