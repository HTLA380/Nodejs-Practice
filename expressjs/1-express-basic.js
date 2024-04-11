const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("404 | Page Not Found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
