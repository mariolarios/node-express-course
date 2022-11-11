const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
// static assets
app.use(express.static("./methods-public"));
//Parse form data or get the form data
app.use(express.urlencoded({ extended: false })); // gives access to form values
//parse json
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);
///////////////////////////////////////////////////////////



//////////////////////////////////////////////////////
app.listen(5000, () => {
  console.log("Server is running on port 5000.....");
});
