// All Imports
const bodyParser = require("body-parser");
const express = require("express");

// All Configs
require("dotenv").config;
const app = express();
const PORT = process.env.PORT || 8000;
const DB = require("./database/Database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const registerRoute = require("./routes/register");

// Routes
app.get("/api", (req, res) => {
  res.send("Welcome to api");
});

// Register
app.use("/api/register", registerRoute);

// if no route available throw 404
app.use((req, res) => {
  res.status(404).json("404: API does not exists");
});

// Server Listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
