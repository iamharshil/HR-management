// All Imports
const express = require("express");

// All Configs
require("dotenv").config;
const app = express();
const PORT = process.env.PORT || 8000;
const DB = require("./database/Database");

// Routes
app.get("/api", (req, res) => {
  res.send("Welcome to api");
});

app.post("/api", (req, res) => {
  res.status(200).json("post method is running");
});

// Register
app.post("/api/register", (req, res) => {
  // const {
  //   firstName,
  //   lastName,
  //   gender,
  //   email,
  //   mobile,
  //   country,
  //   birthDate,
  //   password,
  //   password2,
  // } = req.body;
  res.send("Hello");

  // get all above field as register user
  // 1. check if all field is filled
  // 2. check if email exists
  // 3. check if password and password2 match
});

// if no route available throw 404
app.use((req, res) => {
  res.status(404).json("404: Page not found");
});

// Server Listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
