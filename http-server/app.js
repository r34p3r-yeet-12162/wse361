const http = require("http");
const fs = require("fs").promises; // fs is an inbuilt api for reading text files
const port = 3001;
const host = "localhost";
const requestListener = function (req, res) {
  let requestedURL = req.url;

  switch (requestedURL) {
    case "/":
      fs.readFile(__dirname + "/index.html")
        .then((contents) => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err); //
          return;
        });
      break;

    case "/about":
      fs.readFile(__dirname + "/about.html")
        .then((contents) => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err); //
          return;
        });
      break;

    default:
      break;
  }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log("Running");
});
// Recreate this server
