const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // must include this so it can go to the next one
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger,  (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.....");
});
