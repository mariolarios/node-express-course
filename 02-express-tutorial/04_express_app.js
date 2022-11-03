const express = require("express");
const path = require("path");
const { on } = require("nodemon");
const app = express();
//This sets up the static and middleware, in 
// other words it is all the files that are also 
// needed to run the app but here you don't have to 
// upload them individually like you do with the http module. 
app.use(express.static("./public"));
// This takes you to the home page, everything inside the
// call back function is executed when accessing the path.
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// Everything here is handling the errors,
// and if the user goes to any path not defined
// it will execute the function.
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

// This sets up the connection to the port,
// everything inside the function is executed when the
// port is on.
app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});

