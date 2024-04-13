const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to the database successfully"))
  .catch((err) => console.log(err));

module.exports = connectDB;
