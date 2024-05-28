const express = require("express");
const app = express();

// we will tell express that we want to use JSON as a way t exhange information
// between client (REST Client) and server app (this app that we are building in Express)
app.use(express.json()); // this is a midleware function

// it is discouraged to have static environment variables in the JS files
require("dotenv").config();
const PORT = process.env.PORT || 8085;
const HOST = process.env.HOST;

// for all routes that start with /users, we will use usersRouter
const usersRouter = require("./routes");
app.use("/users", usersRouter); // app.use is a middleware function

app.listen(PORT, HOST, () => {
  console.log(`We are running at http://${HOST}:${PORT}`);
});
