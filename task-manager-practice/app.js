const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 3000;

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log("server is listening on prot 3000...");
});
