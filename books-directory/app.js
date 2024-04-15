const express = require("express");
const app = express();
require("express-async-errors");
const router = require("./routes/books");
const connectDB = require("./db/connect");

const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use("/api/v1/books/", router);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server is listening on port 3000....");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
