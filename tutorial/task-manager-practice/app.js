const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const errorHandlerMiddleware = require("./middleware/errorHandler");
dotenv.config();

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server is listening on prot 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
