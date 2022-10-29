const sentence = require("./practice2.js");
var fs = require("fs");
var os = require("os");

fs.writeFile(
  "/Users/mariolarios/Documents/GitHub/node-express-course/01-node-tutorial/content/practice.txt",
  "hello world" + os.userInfo().username,
  { flag: "a" },
  (err, result) => {
    if (err) {
      console.log(err);
    }
  }
);
