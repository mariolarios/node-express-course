const express = require("express");
const app = express();

const consoleLog = (req, res, next) => {
  console.log("This is my statement");
  next();
};

module.exports = consoleLog;
