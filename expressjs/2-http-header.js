const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("<h1>Hello World</h1>");
});

server.listen(5000);
