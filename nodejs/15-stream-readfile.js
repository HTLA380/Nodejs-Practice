const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

// default 64 kb
// last buffer - remaninder
// highWaterMark - control size

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
