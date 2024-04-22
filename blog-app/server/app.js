require("dotenv").config();
require("express-async-error");

const express = require("express");
const app = express();
const blogRouter = require("./routes/blog");
const connectDB = require("./db/connect");

const BadRequest = require("./errors/bad-request");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/api/", (req, res) => {
  throw new BadRequest("this is a bad request error");
  res.send("Welcome to my new blog post");
});

app.use("/api/blogs", blogRouter);
app.use(errorHandlerMiddleware);

const PORT = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
