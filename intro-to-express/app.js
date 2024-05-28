const express = require("express"); // before we require express, remember to install it from the CLI
const server = express(); // we then create an instance of express. This IS the server
const port = 3000;

server.get("/", (req, res) => {
  res.send(
    "Welcome to the home page, and we are using nodemon as a process daemon"
  );
});
server.get("/about", (req, res) => {
  res.send("");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
