const express = require("express");
require("express-async-errors");
const app = express();
const blogRouter = require("./routes/blog");
const authRouter = require("./routes/auth");

const authenticationMiddleware = require("./middleware/authentication");

const connectDB = require("./db/connect");

require("dotenv").config();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("Welcome to my new blog post");
});

app.use("/api/blogs", authenticationMiddleware, blogRouter);
app.use("/api/auth", authRouter);
app.use(notFoundMiddleware);
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
