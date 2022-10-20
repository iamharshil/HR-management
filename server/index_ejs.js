// All imports
const express = require("express");
const open = require("open");
const path = require("path");

// all configs
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
const DB = require("./database/Database");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));
app.use(express.static(__dirname + "./public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.status(200).json("Port is working");
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// if no route available throw 404
app.use((req, res) => {
  res.status(404).json("404: Page not found");
});

// server listening
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
open(`http://localhost:${PORT}`);
