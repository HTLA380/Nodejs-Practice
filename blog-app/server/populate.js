require("dotenv").config();

const connectDB = require("./db/connect");
const Blog = require("./models/Blog");

const data = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Blog.deleteMany();
    await Blog.create(data);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
