const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Hello from the home page");
  }
  if (req.url === "/about") {
    return res.end("Hello from the about page");
  }
  res.write("Page can't be found");
  return res.end();
});

server.listen(5000);
