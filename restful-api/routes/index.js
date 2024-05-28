// we start by defining express on this page
const express = require("express");
// next we intialise a Router()
const usersRouter = express.Router(); // assuming that we are only going to work with user ..

// We are building a RESTful API
// REST is a protocol (a set of rule and standards)

// REST dictates that we use HTTP  verbs for certain actions

//1. we use the get verb when we want to create a resource via the API
const usersArr = [
  {
    name: "John",
    surname: "Doe",
    age: 20,
  },
  {
    name: "Jane",
    surname: "Doe",
    age: 18,
  },
];

usersRouter.get("/view", (request, response) => {
  // we want to send a JSON object that contains the data from usersArr
  response.json(usersArr);
});
usersRouter.get("/view/asc", (request, response) => {
  /* Show in the console,  the users in ascending order according to age */
});
usersRouter.post("/add", (request, response) => {
  // This ishow we read the incoming data from the client (REST client)
  console.log(request.body);

  console.log(`The incoming user is ${request.body.name}`);

  // Task 1: Add the new item into the array called usersArr
});

module.exports = usersRouter;
