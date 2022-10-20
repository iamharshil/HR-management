// All Imports
const express = require("express");
const { reset } = require("nodemon");

// All Configs
require("dotenv").config;
const app = express();
const PORT = process.env.PORT || 3000;
const DB = require("./database/Database");

// Routes
app.get("/", (req, res) => {
  res.send("Hello from root route");
});

app.post("/", (req, res) => {
  res.status(200).json("post method is running");
});

app.use((req, res) => {
  res.status(404).json("404: Page not found");
});

// Server Listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
