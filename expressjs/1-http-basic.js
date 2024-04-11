const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user enter the server");
  // we need to send the info to the browser
  res.end("Hello World");
});

server.listen(5000);
