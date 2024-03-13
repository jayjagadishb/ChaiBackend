require("dotenv").config();
const express = require("express");
const boduParserc = require("body-parser");
const port = 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("Hello jay!");
});

app.get("/deploy", (req, res) => {
  res.send("Welcome to Backend Deploy!");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`);
});
